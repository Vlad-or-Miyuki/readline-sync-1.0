const readlineSync = require('readline-sync')

const sentence = readlineSync.question('Введите строку')

const countWords = (sentence) => {
  const trimmedSentence = sentence.trim(); // удаляет пробельные символы

  if (trimmedSentence === '') {
    return 0;
  }

  const words = trimmedSentence.split(' ') // переделка строки в массив
  return words.length;
}
console.log(countWords(sentence));