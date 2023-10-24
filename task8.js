const readlineSync = require('readline-sync')

const incomes = readlineSync.question('Введите доходы: ')
const expenses = readlineSync.question('Введите расходы: ')

const calculateBalance = (incomes, expenses) => {
const result = incomes - expenses;
return result
}
console.log(calculateBalance(incomes, expenses));