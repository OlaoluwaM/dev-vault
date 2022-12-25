import { pipe } from 'fp-ts/function'
import { Chain, Chain1, Chain2, chainFirst as chainFirst_ } from 'fp-ts/Chain'
import { HKT, URIS, URIS2, Kind, Kind2 } from 'fp-ts/HKT'

interface Logger<F> extends Chain<F> {
  readonly log: (message: string) => HKT<F, void>
}

interface Logger1<F extends URIS> extends Chain1<F> {
  readonly log: (message: string) => Kind<F, void>
}

interface Logger2<F extends URIS2> extends Chain2<F> {
  readonly log: <E>(message: string) => Kind2<F, E, void>
}

export function before_<F extends URIS2>(
  L: Logger2<F>
): (message: string) => <E, A>(ma: Kind2<F, E, A>) => Kind2<F, E, A>
export function before_<F extends URIS>(
  L: Logger1<F>
): (message: string) => <A>(ma: Kind<F, A>) => Kind<F, A>
export function before_<F>(
  L: Logger<F>
): (message: string) => <A>(ma: HKT<F, A>) => HKT<F, A> {
  return (message) => (ma) => L.chain(L.log(message), () => ma)
}

export function after_<F extends URIS2>(
  L: Logger2<F>
): (message: string) => <E, A>(ma: Kind2<F, E, A>) => Kind2<F, E, A>
export function after_<F extends URIS>(
  L: Logger1<F>
): (message: string) => <A>(ma: Kind<F, A>) => Kind<F, A>
export function after_<F>(
  L: Logger<F>
): (message: string) => <A>(ma: HKT<F, A>) => HKT<F, A> {
  const chainFirst = chainFirst_(L)
  return (message) => chainFirst(() => L.log(message))
}

// ---------------------------------------
// example
// ---------------------------------------

import * as TE from 'fp-ts/TaskEither'
import * as C from 'fp-ts/Console'

const L: Logger2<TE.URI> = {
  ...TE.Chain,
  log: TE.fromIOK(C.log)
}

const before = before_(L)
const after = after_(L)

import fetch from 'node-fetch'

const program = TE.fromTask(() => fetch('https://swapi.dev/api/people/1/'))

const programWithLogging = pipe(
  program,
  before('retrieving Luke...'),
  after('ending')
)

programWithLogging().then(console.log)
