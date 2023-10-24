const readlineSync = require('readline-sync');

const x1 = readlineSync.question('Введите первую точку');
const y1 = readlineSync.question('Введите вторую точку');
const x2 = readlineSync.question('Введите третью точку');
const y2 = readlineSync.question('Введите четвертую точку');

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

console.log(calculateDistance(x1, y1, x2, y2));