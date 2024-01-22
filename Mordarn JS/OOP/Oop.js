class Car {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.isStarted = false;
  }

  start() {
    if (!this.isStarted) {
      this.isStarted = true;
      console.log(`The car has started.`);
    } else {
      console.log(`The car is already started.`);
    }
  }

  accelerate() {
    if (this.isStarted) {
      console.log(`The car is accelerating.`);
    } else {
      console.log(`Please start the car first.`);
    }
  }

  brake() {
    if (this.isStarted) {
      console.log("The car is braking.");
    } else {
      console.log(`Please start the car first.`);
    }
  }

  static _stopStatic() {
    console.log(`This is Static KeyWord`);
    return ` It can be accessed directly on the class itself, without needing an instance of the class.`;
  }
}

// Creating an instance of the Car class
let helloCar = new Car("red", "Toyota", "Camry");

// Accessing the attributes of helloCar
console.log(`Color:${helloCar.color}`);
console.log(`Brand:${helloCar.brand}`);
console.log(`Model:${helloCar.model}`);

// Calling methods on helloCar
helloCar.start();
helloCar.accelerate();
helloCar.brake();

console.log(Car._stopStatic());
