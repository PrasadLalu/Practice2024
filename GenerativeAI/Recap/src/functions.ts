
function greet(name: string) {
    return ('Hello '+ name);
}

function greetToUpperCase(name: string) {
    return ('Hello ' + name.toUpperCase())
}

function greetToLocaleUpperCase(name: string) {
    return name.toLocaleUpperCase('tr-TR')
}

console.log(greetToUpperCase('John'));
console.log(greetToLocaleUpperCase('istanbul'))

const greetName = (name: string) => {
    console.log('Hello ' + name);
}

function greetMultiple(...names: string[]) {
    names.forEach(name => {
        greetName(name);
    });
}

console.log(greetMultiple('Herry'));
console.log(greetMultiple('John', 'Jessica', 'Peter'));
