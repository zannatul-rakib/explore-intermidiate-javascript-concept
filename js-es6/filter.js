// applying filter with numbers
const numbers = [23, 45, 67, 87, 98, 29, 50, 10, 56, 44, 20];
const bigNum = numbers.filter((b) => b >= 50);
console.log(bigNum);
const tinyNum = numbers.filter((t) => t <= 50);
console.log(tinyNum);
const evenNum = numbers.filter((e) => e % 2 === 0);
console.log(evenNum);
const oddNum = numbers.filter((o) => o % 2 === 1);
console.log(oddNum);

// apply filter with array of object
const products = [
  { id: 1, name: "lenovo thinkpad", price: 87500 },
  { id: 2, name: "hp 840 g2", price: 57500 },
  { id: 3, name: "lenovo latitude 2-2", price: 98000 },
  { id: 4, name: "dell ideapad", price: 65000 },
  { id: 5, name: "asus probook", price: 81900 },
  { id: 6, name: "mac book", price: 143000 },
];
const expensive = products.filter((product) => product.price > 80000);
console.log("Expensive price", expensive);
const midrange = products.filter((product) => product.price <= 80000);
console.log("Midrange price", midrange);
