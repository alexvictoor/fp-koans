import fp from 'lodash/fp';

// Your code below
// should have the same behavior as lodash zipWith
const zipWith = <T1, T2, TResult>(fn: (value1: T1, value2: T2) => TResult, data1: T1[], data2: T2[]): TResult[] => [];

//////////////////////////////////////////////////

describe("Zip with", () => {

  it("should behave like lodash", async () => {
    // given
    const data = randomData();
    const data2 = randomData();
    // when
    // then
    expect(zipWith((x, y) => `${x},${y}`, data, data2)).toEqual(fp.zipWith((x, y) => `${x},${y}`, data, data2));
    
  });

});

const randomData = () =>  Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
