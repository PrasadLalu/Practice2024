const persons = [
  {
    name: "Ram",
    age: 30,
    country: "INDIA",
  },
  {
    name: "Mohan",
    age: 32,
    country: "INDIA",
  },
  {
    name: "Suzuki",
    age: 32,
    country: "JAPAN",
  },
  {
    name: "Peter",
    age: 35,
    country: "USA",
  },
];

// map
let getAllNames = persons.map((person, index) => {
    // console.log(person, index)
    return `${person.name} age is ${person.age}`;
});
// console.log(getAllNames);

// find
let personFromUSA = persons.find((person, index) => {
    return person.country == 'USA';
});
// console.log(personFromUSA);

// filter
let personsFromINDIA = persons.filter((person, index) => {
    return person.country === "INDIA";
});
// console.log(personsFromINDIA);

// some
let checkSome = persons.some((person, index) => {
    return person.age > 32;
});
// console.log(checkSome);

// every
let checkEvery = persons.every((person, index) => {
    // console.log(index)
    return person.age >= 30;
});
// console.log(checkEvery);


const fruits = ['Apple', 'Mongo', 'Banana', 'Orange'];
console.log(fruits.includes("Apple"));

console.log(fruits.indexOf("Mongo"));

// findIndex
let findPersonIndex = persons.findIndex((person, index) => {
    return person.country === 'USA';
});
console.log(findPersonIndex);


async function getUsers() {
    try {
        fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
            .then(response => response.json())
            .then(users => console.log(users));
    } catch (e) {
        console.log(e)
    }
}

getUsers();