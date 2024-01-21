/**
 * What is Inheritance?
 * 
  * Inheritance is a fundamental concept in object-oriented programming (OOP) that allows classes to inherit properties and methods from other classes. It establishes a relationship between classes, where one class (called the "child" or "derived" class) derives or inherits the characteristics of another class (called the "parent" or "base" class).

  The child class inherits the attributes and behaviors of the parent class, allowing it to reuse and extend the functionality provided by the parent class. This promotes code reuse, modularity, and the concept of a hierarchical structure.

  The child class can add its own specific attributes and behaviors, and it can also override or modify the inherited attributes and methods from the parent class to suit its own requirements.
 */

class Parent {
  constructor(father, mother) {
    this.father = father;
    this.mother = mother;
  }

  totalAsset() {
    return this.father + this.mother;
  }
}

class Siblings extends Parent {
  childAsset() {
    const parent = this.totalAsset();
    const brother = 200;

    return parent + brother;
  }

  rentAssetSister() {
    const sister = 100;
    const total = this.childAsset();

    return total - sister;
  }
}

const asset = new Siblings(20, 15);
console.log(asset.childAsset());
console.log(asset.totalAsset());
console.log(asset.rentAssetSister());
// console.log(asset.childAsset())
