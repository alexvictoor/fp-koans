import fp from "lodash/fp";

// Your code below
// should have the same behavior as lodash once
type OnceFunc = <T extends (...args: any) => any>(func: T) => T;
const once: OnceFunc = (fn) => fn;

//////////////////////////////////////////////////

describe("Once", () => {
  it("should behave like lodash", async () => {
    // given
    let calls = 0;
    const count = () => {
      calls++;
      return calls;
    };
    // when
    const onceCount = once(count);
    // then
    expect(onceCount()).toEqual(onceCount());
  });
});