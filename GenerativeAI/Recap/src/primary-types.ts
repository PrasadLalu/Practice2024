let firstName = 'John';
let isAdmin = true;
let age = 30;

let duties = ['Write code', 'Fix bugs'];

let car = null;
let bicycle = undefined;

let work = () => {
    console.log('Working...');
}

let all = [firstName, isAdmin, age, duties, car, bicycle, work];

for (let item of all) {
    console.log(String(item), 'is:', typeof item);
}
