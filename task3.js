const readlineSync = require('readline-sync');

const price = readlineSync.question('Введите цену товара: ');
const discountPercentage = readlineSync.question('Введите скидку: ');

const calculateDiscount = (price, discountPercentage) => {
  const result = price * discountPercentage
  return result

};

console.log(calculateDiscount( ))