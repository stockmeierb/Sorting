// describe('Merge Sort', function() {
//   it('handles an empty array', function() {
//     expect(mergeSort([])).toEqual([]);
//   });

//   it('handles an array with one item', function() {
//     expect(mergeSort([6])).toEqual([6]);
//   });

//   it('handles an array with multiple items', function() {
//     // spyOn(window, 'swap').and.callThrough();
//     expect(mergeSort([4, 5, 1, 9, 12, 3])).toEqual([1, 3, 4, 5, 9, 12]);
//     // expect(swap.calls.count()).toEqual(6);
//   });
// });

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5, 6, 7, 2, 3])).toEqual([[5, 6], [7, 2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([5, 6], [2, 3, 7])).toEqual([2, 3, 5, 6, 7]);
  });
});
