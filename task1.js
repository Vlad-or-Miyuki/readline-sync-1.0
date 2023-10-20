const readlineSync = require('readline-sync');

const income = readlineSync.question('Введите сумму дохода за месяц: ');

const incomeTaxCalculator = (income) => {
const result = income * 0.13
return result
};

console.log(incomeTaxCalculator(income));



//const sum = (a, b) => {
  //  return a + b;
 // };