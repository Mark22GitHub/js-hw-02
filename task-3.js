const findLongestWord = function (string) {
    
  let splitToWord = string.split(" ");
  let findWord = '';
  
  for (let word of splitToWord) {
    if (word.length > findWord.length) {
      findWord = word;
    }
  }
  return findWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'