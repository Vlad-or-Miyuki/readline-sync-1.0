const readlineSync = require('readline-sync');

const price = readlineSync.question('Введите цену товара: ');
const discountPercentage = readlineSync.question('Введите скидку: ');

const calculateDiscount = (price, discountPercentage) => {
  const discount = price * discountPercentage / 100;
  const result = price - discount;
  return result
};
console.log(calculateDiscount(price, discountPercentage))