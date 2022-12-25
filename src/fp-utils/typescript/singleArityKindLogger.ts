import { pipe } from 'fp-ts/function'
import { Chain1, chainFirst as chainFirst_ } from 'fp-ts/Chain'
import { URIS, Kind } from 'fp-ts/HKT'

interface Logger1<F extends URIS> extends Chain1<F> {
  readonly log: (message: string) => Kind<F, void>
}

export function before_<F extends URIS>(
  L: Logger1<F>
): (message: string) => <A>(ma: Kind<F, A>) => Kind<F, A> {
  return (message) => (ma) => L.chain(L.log(message), () => ma)
}

export function after_<F extends URIS>(
  L: Logger1<F>
): (message: string) => <A>(ma: Kind<F, A>) => Kind<F, A> {
  const chainFirst = chainFirst_(L)
  return (message) => chainFirst(() => L.log(message))
}

// ---------------------------------------
// example
// ---------------------------------------

import * as T from 'fp-ts/Task'
import * as C from 'fp-ts/Console'

const L: Logger1<T.URI> = {
  ...T.Chain,
  log: T.fromIOK(C.log)
}

const before = before_(L)
const after = after_(L)

import fetch from 'node-fetch'

const program = () => fetch('https://swapi.dev/api/people/1/')

const programWithLogging = pipe(
  program,
  before('retrieving Luke...'),
  after('ending')
)

programWithLogging()
