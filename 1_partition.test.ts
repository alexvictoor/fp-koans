import { faker } from '@faker-js/faker';
import fp from 'lodash/fp';

// Your code below
// should have the same behavior as lodash partiton
const partition = (predicate: ((elt: number) => boolean), data: number[]): [number[], number[]] => [[],[]];


//////////////////////////////////////////////////

describe("Partition", () => {

  it("should behave like lodash", async () => {
    // given
    const data = randomData();
    // when
    // then
    expect(partition(n => n < 100, data)).toEqual(fp.partition(n => n < 100, data));
    
  });

});

const randomData = () =>  Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
