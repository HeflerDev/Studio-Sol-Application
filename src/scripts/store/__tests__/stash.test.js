import { stash, read } from "..";

describe("when manipulating the store", () => {
  test("stashes correctly", () => {
    const stashTest = stash('key', 'value')
    expect(typeof stashTest).toBe("object");
  })
  test("read multiple type of values after is stashed", () => {
    const stashValues = [
      'string',
      123,
      ['value', 123],
      {
        otherKey: 'othervalue'
      },
      false
    ]

    for (let val of stashValues) {
      stash ('key', val)
      const readTest = read("key");
      expect(readTest).toBe(val)
    }
  })
})
