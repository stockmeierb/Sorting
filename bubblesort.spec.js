describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one item', function() {
    expect(bubbleSort([6])).toEqual([6]);
  });

  it('handles an array with multiple items', function() {
    expect(bubbleSort([4, 5, 1, 9, 12, 3])).toEqual([1, 3, 4, 5, 9, 12]);
  });
});
