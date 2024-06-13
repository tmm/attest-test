import { attest, bench } from '@arktype/attest'
import { expect, test } from 'vitest'

import { join } from './join.js'

test('default', () => {
  const res = join(['foo', 'bar', 'baz'], ' ')
  attest.instantiations([45, 'instantiations'])

  expect(res).toMatchInlineSnapshot(`"foo bar baz"`)
  attest(res).snap('foo bar baz')

  bench('bench type', () => {
    return {} as join<['foo', 'bar', 'baz'], ' '>
  }).types([23, 'instantiations'])
})
