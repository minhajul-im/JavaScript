/**
 * What is OOP?
 * 
  * OOP stands for Object-Oriented Programming. It is a programming paradigm or a way of organizing and structuring code to represent real-world objects, concepts, or entities. In object-oriented programming, the focus is on creating objects, which are instances of classes, and defining their behavior through methods (functions) and properties (attributes).

  * WHAT IS OBJECT?
  *
  * In the context of object-oriented programming (OOP), an object is a fundamental unit of a program that represents a real-world entity, concept, or thing. It is an instance of a class, which serves as a blueprint or template defining the structure and behavior of objects of that type.

  An object combines data (attributes or properties) and behavior (methods or functions) into a single entity. The data represents the state or characteristics of the object, while the behavior represents the actions or operations that the object can perform.

  Here's an example to illustrate the concept:

  Let's consider a class called "Car." The Car class would define the attributes of a car, such as its color, brand, and model. It would also define the methods associated with a car, such as "start," "accelerate," and "brake."

  Now, an object of the Car class could be created, representing a specific car. For instance, we could create an object called "myCar" that has the color "red," brand "Toyota," and model "Camry." This object would have its own unique set of data, representing the specific state of that car.

  We can then interact with the object by invoking its methods. For example, we could call the "start" method on the "myCar" object to start the car's engine, or call the "accelerate" method to make it go faster.

  In summary, an object is an instance of a class in OOP. It combines data and behavior, representing a specific entity or thing. Objects allow us to model and work with real-world concepts in a structured and modular way within a program.

  * What is constructor?
  *
  * A constructor is a special method in a class that is automatically called when an object of that class is created or instantiated. It is used to initialize the object's state or set up its initial values. In other words, the constructor is responsible for preparing the object for use.

  * What is Static?
  * 
  * the static keyword is used to define class-level members (properties and methods) that are shared among all instances of the class, rather than being specific to individual objects or instances.

  When a member is declared as static, it means that it belongs to the class itself, not to any particular object created from that class. It can be accessed directly on the class itself, without needing an instance of the class.
 */

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
