class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
        
    }

    speak() {
        console.log(`${this.breed}s make this sound: ${this.sound}`);
    }

    // newFood(food) {
    //     this.favFoods.push(food);
    // }

    feed(food) {
        this.favFoods;
        this.favFoods.push(food);
        return this.favFoods;
    }

}

const ernie = new Pet('dog', 1, 'Pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman', 'grrrr');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer', 'woof woof');

// console.log(ernie);

// ernie.speak();
// vera.speak();
// scofield.speak();

// ernie.favFoods = ['biscuits', 'steak', 'treats'];
// console.log(ernie.favFoods);
// ernie.newFood('crackers');
// console.log(ernie.favFoods);

console.log(ernie.activity);
console.log(ernie.feed(['crackers', 'biscuits']));