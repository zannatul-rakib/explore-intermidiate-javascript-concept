// array convert double with using forLoop
const numbers = [23, 45, 67, 87, 98, 23];
const output = [];
for (const number of numbers) {
  const douleIt = number * 2;
  output.push(douleIt);
}
// console.log(output);

// simple map  with numbers
const oddNumbers = [23, 87, 91, 65, 11, 9];
const double = oddNumbers.map((x) => x * 2);
console.log(double);
const half = oddNumbers.map((h) => h / 2);
console.log(half);

// map with string
const friends = ["Siddik", "Sharful", "Kishor", "Shahidul"];
const firstLetters = friends.map((friend) => friend[0]);
console.log(firstLetters);
const nameLength = friends.map((l) => l.length);
console.log(nameLength);

// using map with array of object
const products = [
  { id: 1, name: "lenovo thinkpad", price: 87500 },
  { id: 2, name: "hp 840 g2", price: 57500 },
  { id: 3, name: "lenovo latitude 2-2", price: 98000 },
  { id: 4, name: "dell ideapad", price: 65000 },
  { id: 5, name: "asus probook", price: 81900 },
  { id: 6, name: "mac book", price: 143000 },
];
const items = products.map((product) => product.price);
console.log(items);
