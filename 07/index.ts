//remember when you use .toFixed(2) it will return string;
function calculateTotalPrice(price: number): number {
  return +(price + price * 0.18).toFixed(1);
}

const priceOfToy = calculateTotalPrice(1234);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);
