const readlineSync = require('readline-sync')

const width = readlineSync.question('Введите ширину')
const height = readlineSync.question('Введите высоту')

const calculateRectangleProperties = (width, height) => {
  var P = (2 * width) + (2 * height);
  var S = (width * height);
  return [P, S]
}
console.log(calculateRectangleProperties(width, height));