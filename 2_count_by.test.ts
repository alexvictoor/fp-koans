import fp from 'lodash/fp';

// Your code below
// should have the same behavior as lodash countBy
const countBy = (fn: ((elt: number) => number), data: number[]): Record<string, number[]> => ({});


//////////////////////////////////////////////////

describe("Count by", () => {

  it("should behave like lodash", async () => {
    // given
    const data = randomData();
    // when
    // then
    expect(countBy(n => n % 3, data)).toEqual(fp.countBy(n => n % 3, data));
    
  });

});

const randomData = () =>  Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
