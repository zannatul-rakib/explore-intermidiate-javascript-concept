// find just return always first one value and filter return all matching value. It's confusing but always remember that find just return one single value

// here is some example to clear this find concepts
const numbers = [23, 45, 67, 87, 98, 29, 50, 10, 56, 44, 20];
const maxNum = numbers.find((num) => num <= 50);
console.log(maxNum);
const minNum = numbers.find((num) => num >= 50);
console.log(minNum);

const products = [
  { id: 1, name: "lenovo thinkpad", price: 87500 },
  { id: 2, name: "hp 840 g2", price: 57500 },
  { id: 3, name: "lenovo latitude 2-2", price: 98000 },
  { id: 4, name: "dell ideapad", price: 65000 },
  { id: 5, name: "asus probook", price: 81900 },
  { id: 6, name: "mac book", price: 143000 },
];
const cheap = products.find((product) => product.price < 80000);
console.log(cheap);
