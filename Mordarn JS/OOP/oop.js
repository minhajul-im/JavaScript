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
let myCar = new Car("red", "Toyota", "Camry");

// Accessing the attributes of myCar
console.log(`Color:${myCar.color}`);
console.log(`Brand:${myCar.brand}`);
console.log(`Model:${myCar.model}`);

// Calling methods on myCar
myCar.start();
myCar.accelerate();
myCar.brake();

console.log(Car._stopStatic());
