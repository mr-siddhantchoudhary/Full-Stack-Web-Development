// const items = {
//     apple: 2.99,
//     banana: 1.99,
//     orange: 3.49,
//     avacado: 4.99
// };

// const exchangeRate = 80;

// const convertedPrices = Object.entries(items).map(([items, price]) => {
//     return [item, price * exchangeRate];
// });


// const convertedItems = Object.fromEntries(convertedPrices);

// console.log(convertedItems);

const items = {
    apple: 2.99,
    banana: 1.99,
    orange: 3.49,
    avocado: 4.99
  };
  
  const exchangeRate = 80;
  
  const convertedPrices = Object.entries(items).map(([item, price]) => {
    return [item, price * exchangeRate];
  });
  
  const convertedItems = Object.fromEntries(convertedPrices);
  
  console.log(convertedItems);
  