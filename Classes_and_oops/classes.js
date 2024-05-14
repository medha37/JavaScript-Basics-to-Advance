class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log('The car is driving.');
    }
    stop() {
        console.log('The car has stopped.');
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar);
console.log(myCar.drive());
console.log(myCar.stop());