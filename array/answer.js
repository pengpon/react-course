const students = [
  {
    name: "Abby",
    age: 17,
    gender: "female",
  },
  {
    name: "Betty",
    age: 18,
    gender: "female",
  },
  {
    name: "Charlie",
    age: 16,
    gender: "male",
  },
  {
    name: "David",
    age: 19,
    gender: "male",
  },
  {
    name: "Emily",
    age: 18,
    gender: "female",
  },
];

// 1
// expect ["Abby","Betty","Charlie","David","Emily"]
console.log(students.map(/* ? */));

students.map(student => student.name)

// 2
// expect ["Miss Abby","Miss Betty","Mr. Charlie","Mr. David","Miss Emily"]
console.log(students.map(/* ? */));

students.map(student => `${student.gender === 'female' ? 'Miss' : 'Mr.'} ${student.name}`)

// 3
// expect [{"name":"Betty","age":18,"gender":"female"},{"name":"Emily","age":18,"gender":"female"}]
console.log(students.filter(/* ? */));

students.filter(student => student.gender === 'female' && student.age >= 18)

// 4
// expect 17.6
console.log(students.reduce(/* ? */));

students.reduce((acc, elem) =>  acc + elem.age, 0)/students.length
