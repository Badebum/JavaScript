function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(
  sortByLength([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]),
);

console.log(
  sortByLength([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ]),
);
