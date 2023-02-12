import fp from 'lodash/fp';

// Your code below
// should have the same behavior as lodash sum by
const sumBy = <T>(fn: (value: T) => number, data: T[]): number => 0;

//////////////////////////////////////////////////

describe("Sum by", () => {

  it("should behave like lodash", async () => {
    // given
    const data = randomData();
    // when
    // then
    expect(sumBy(x => x + 2, data)).toEqual(fp.sumBy(x => x + 2, data));
    
  });

});

const randomData = () =>  Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
