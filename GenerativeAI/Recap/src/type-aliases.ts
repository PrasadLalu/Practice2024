
type Position = 'Programmer' | 'HR';

type Colleague = {
    name: string,
    age: number,
    position: Position,
    greetBack?: Function,
}

const myColleague: Colleague = {
    name: 'John',
    age: 30,
    position: 'Programmer',
}

const otherColleague: Colleague = {
    name: 'Jessica',
    age: 29,
    position: 'HR',
    greetBack: () => {
        console.log('Hi...');
    }
}

function greetColleague(colleague: Colleague) {
    console.log('Hello ', colleague.name);

    if (colleague.greetBack) {
        colleague.greetBack();
    }

}

greetColleague(myColleague);
greetColleague(otherColleague);
