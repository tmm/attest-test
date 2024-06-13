import { setup, teardown } from '@arktype/attest'

export { teardown }

export default function () {
  return setup({
    formatter: 'pnpm biome format --write',
  })
}
