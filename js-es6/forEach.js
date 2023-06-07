// using simple forEach
const friends = ["Siddik", "Sharful", "Kishor", "Shahidul"];
friends.forEach((friend) => console.log(friend));

const products = [
  { id: 1, name: "lenovo thinkpad", price: 87500 },
  { id: 2, name: "hp 840 g2", price: 57500 },
  { id: 3, name: "lenovo latitude 2-2", price: 98000 },
  { id: 4, name: "dell ideapad", price: 65000 },
  { id: 5, name: "asus probook", price: 81900 },
  { id: 6, name: "mac book", price: 143000 },
];
products.forEach((p) => console.log(p.name));
