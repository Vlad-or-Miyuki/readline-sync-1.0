const readlineSync = require('readline-sync');

const celsius = readlineSync.question('Введите температуру в цельсиях: ');

const celsiusToFahrenheit = (celsius) => {
  const result = celsius * 9 / 5 + 32
  return result

};

console.log(celsiusToFahrenheit(celsius));