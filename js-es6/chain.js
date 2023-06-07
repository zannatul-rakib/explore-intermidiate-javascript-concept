// find out value in array of object

const users = [
  {
    id: 1,
    name: "rakib",
    job: "developer",
  },
];
const getOutput = users[0].name;
// console.log(getOutput);

const person = [
  {
    name: "Shaila",
    class: 8,
    address: {
      city: "Gazipur",
      area: "Baroipara, Tangile school academy",
    },
    reason: "I love her",
  },
];
const personOutput = person[0].reason;
// console.log(personOutput);

const students = {
  schoolName: "Tangail school academy",
  findClass: {
    class: 8,
    Total: 23,
    iNeed: {
      herName: "Shaila",
      details:
        "She looks beautiful. Her eyes dam cute. She looks me doubtfully.",
      mission: "I want to proposed her",
      herAddress: {
        area: "Tangile academic care beside of Dong Bang Dyeing Ltd.",
        thana: "Kaliakoir",
        city: "Gazipur",
      },
    },
  },
};

const studentsOutput = students.findClass.iNeed?.herAddress.city;
console.log(studentsOutput);
