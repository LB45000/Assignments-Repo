class Animal {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    printName() {
        console.log(`The name of this animal is ${this.name}`);
    }

    showHeight() {
        console.log(`The height of this animal is ${this.height} ft`);
    }

    showWeight() {
        console.log(`The weight of this animal is ${this.weight} lbs`);
    }
}

class ExtendedAnimal extends Animal {
    constructor(name, height, weight, additionalProperty) {
        super(name, height, weight);
        this.additionalProperty = additionalProperty;
    }

    // New method specific to ExtendedAnimal
    useExtendedMethod() {
        console.log(`This is a special method for the extended animal class, and the additional property is: ${this.additionalProperty}`);
    }
}

const ringedSeal = new Animal("seal", 5, 120);
ringedSeal.printName();

const extendedRingedSeal = new ExtendedAnimal("extended seal", 6, 150, "Special Property");
extendedRingedSeal.printName();
extendedRingedSeal.useExtendedMethod();
