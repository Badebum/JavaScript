function openOrSenior(data) {
  return data.map(a => (a[0] >= 55 && a[1] > 2 ? 'Senior' : 'Open'));
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 3],
    [19, -2],
    [104, 20],
  ]),
);
