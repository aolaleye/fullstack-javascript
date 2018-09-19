const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: () => {
        console.log('Woof!');
    }
}

console.log(ernie.age);
console.log(ernie['age']);

console.log(ernie.breed);
console.log(ernie['breed']);

ernie['bark']();
ernie.bark();

let prop = 'breed';
console.log(ernie[prop]);