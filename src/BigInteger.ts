import { Option, some, none } from 'fp-ts/Option'
import { BigInteger } from 'big-integer'
import * as bigInteger from 'big-integer'
import { Ring } from 'fp-ts/Ring'
import { Eq } from 'fp-ts/Eq'
import { Ord } from 'fp-ts/Ord'
import { unsafeCoerce } from 'fp-ts/function'

export function wrap(x: number | string): Option<BigInteger> {
  try {
    return some(bigInteger(unsafeCoerce(x)))
  } catch (e) {
    return none
  }
}

export const zero = bigInteger.zero

export const one = bigInteger.one

export const two = bigInteger['2']

export function add(x: BigInteger, y: BigInteger): BigInteger {
  return x.add(y)
}

export function mul(x: BigInteger, y: BigInteger): BigInteger {
  return x.multiply(y)
}

export function negate(x: BigInteger): BigInteger {
  return x.negate()
}

export function sub(x: BigInteger, y: BigInteger): BigInteger {
  return x.subtract(y)
}

export function gcd(x: BigInteger, y: BigInteger): BigInteger {
  return bigInteger.gcd(x, y)
}

export function lcm(x: BigInteger, y: BigInteger): BigInteger {
  return bigInteger.lcm(x, y)
}

export const eq: Eq<BigInteger> = {
  equals: (x, y) => x.equals(y)
}

export const ord: Ord<BigInteger> = {
  ...eq,
  compare: (x, y) => x.compare(y) as any
}

export const ring: Ring<BigInteger> = {
  add: (x, y) => add(x, y),
  zero: zero,
  mul: (x, y) => mul(x, y),
  one: one,
  sub: (x, y) => sub(x, y)
}