const readlineSync = require('readline-sync')
const distance = readlineSync.question('Введите расстояние')
const speed = readlineSync.question('Введите скорость')

const calculateTime = (distance, speed) => {
  const result = distance / speed;
  return result
}
console.log(calculateTime(distance, speed));