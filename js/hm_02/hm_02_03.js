const findLongestWord = string => {
  const words = string.split(' ');
  let biggesWord = words[0];
  for (const word of words) {
    if (word.length > biggesWord.length) {
      biggesWord = word;
    }
  }

  return biggesWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
