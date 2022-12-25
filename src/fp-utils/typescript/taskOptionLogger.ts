import * as TO from 'fp-ts/TaskOption'
import * as C from 'fp-ts/Console'
import { pipe } from 'fp-ts/function'

// ---------------------------------------
// my program effect
// ---------------------------------------

interface Effect<A> extends TO.TaskOption<A> {}

interface Capabilities {
  readonly chain: <A, B>(f: (a: A) => Effect<B>) => (fa: Effect<A>) => Effect<B>
  readonly chainFirst: <A, B>(
    f: (a: A) => Effect<B>
  ) => (first: Effect<A>) => Effect<A>
  readonly log: (message: string) => Effect<void>
}

const c: Capabilities = {
  chain: TO.chain,
  chainFirst: TO.chainFirst,
  log: TO.fromIOK(C.log)
}

// ---------------------------------------
// logging combinators
// ---------------------------------------

export const before = (message: string) => <A>(ma: Effect<A>): Effect<A> =>
  pipe(
    c.log(message),
    c.chain(() => ma)
  )

export const after = (message: string): (<A>(ma: Effect<A>) => Effect<A>) =>
  c.chainFirst(() => c.log(message))

// ---------------------------------------
// example
// ---------------------------------------

import fetch from 'node-fetch'

const program = TO.fromTask(() => fetch('https://swapi.dev/api/people/1/'))

const programWithLogging = pipe(
  program,
  before('retrieving Luke...'),
  after('ending')
)

programWithLogging()
