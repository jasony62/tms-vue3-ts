import { SampleSchema } from '../data/schema-array-simple'
import { build } from '../../src/json-doc/builder'

describe('通过API从外部获取值', () => {
  it('返回字段的值', () => {
    const editDoc = { additionalName: ['alice', 'bob'] }
    const nodes = build({
      schema: SampleSchema,
      editDoc,
      onMessage: (msg: string) => {
        console.log(msg)
      },
    })
    // console.log(JSON.stringify(nodes, null, 2))
  })
})
