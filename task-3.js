// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.




const findLongestWord = function (string) {
    
  let splitToWord = string.split(" ");
    console.log(splitToWord);

    // let indexOfWord = splitToWord[0];
    // console.log(indexOfWord);

    let lengthOfWord= splitToWord[0].length
    console.log(lengthOfWord);

    for (let i = 0; i < splitToWord.length; i += 1) {
        console.log(splitToWord[i]);
        console.log(splitToWord[i].length);

    }




    // let longestWord = splitSentence.length;
    // console.log(longestWord);

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'