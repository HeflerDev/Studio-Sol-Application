import { appendToBody } from "..";

/**
 * @jest-environment jsdom
 */

describe("when rendering the page", () => {
  test('it renders inside main', () => {
    expect(appendToBody('<p>Lorem Ipsum</p>')).toBe('<main><p>Lorem Ipsum</p></main>')
  })
})
