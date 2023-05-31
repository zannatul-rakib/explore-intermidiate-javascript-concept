// default parameter
function add(a, b = 1) {
  const sum = a + b;
  return sum;
}
const output1 = add(0);
console.log(output1);

function fullName(firstName, lastName = "Developer") {
  const names = firstName + " " + lastName;
  return names;
}
const output2 = fullName("Rakib");
console.log(output2);
