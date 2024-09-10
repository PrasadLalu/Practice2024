const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log([100, ...array1, ...array2, 99]);

// Default Paramenters
function add(num1 = 1, num2=2) {
    return num1 + num2;
}

console.log(add(10, 20));


// Array
const array = [1, 2, 3, 4, 5];
console.log(array[0]);

const [firstElement, secondElement, ...rest] = array;
console.log(firstElement, secondElement);
console.log(rest);


// Destructuring
const id = 1;
const productName = "Apple Watch";
const rating = 5;

const product = {
    id,
    productName,
    rating
}

console.log(product);

const product2 = {
    description: 'Product2 description',
    id,
    productName,
    rating,
}
const { description } = product2;
console.log(description);


// Ternary Operator
let showRecipeName = true;

function getRecipeOneName(recipeName) {
    return recipeName;
}

function getRecipeTwoName(recipeName) {
    return recipeName
}

showRecipeName
    ? console.log(getRecipeOneName('Pizza'))
    : console.log(getRecipeTwoName('Cock'));




// Template Literals
let firstName = "John";
let lastName = "Doe";
console.log("Name is:", `${firstName} ${lastName}`);



function getName() {
    return "John";
}

let a = false;
let b = true;
console.log(a || getName());