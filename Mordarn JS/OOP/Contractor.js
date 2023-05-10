class Parents {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  };
  fName() {
    console.log(`My father's name ${this.fatherName}.`);
  }
  mName() {
    console.log(`My mother's name ${this.motherName}`);
  }

};

class Child extends Parents {
  constructor(fatherName, motherName,son, daughter) {
    super(fatherName, motherName);
    this.son = son;
    this.daughter = daughter;
  }
  dName() {
    console.log(`${this.daughter} & ${this.son}`);
  };
  family() {
    console.log(`Father: ${this.fatherName}, Mother: ${this.motherName}, Son: ${this.son}, Daughter: ${this.daughter}`);
  };
  fatherMotherName() {
    return `${this.fName()} & ${this.mName()}`;
  }
}
const familyName = new Child('Mr. Mark', 'Miss. Jenifa', 'Jonas', 'Monica');

const log = (anything) => console.log(anything);

const set = new Set();

const sakibs = { name: 'Sakib', age: 29 };
const tamims = { name: 'Tamim', age: 38 };
set.add(sakibs).add(tamims);
[...set].forEach(i => log(`${i.name}, ${i.age}`));


const linearSearch = (data, target) => {// It's a function.
  for(let i = 0; i < data.length; i++){ // loop all data traverse.
    if(data[i] === target){ 
      // It's a condition when condition true then executed.
      return `Data is Found ${i}`;
    }
  }
  return `Data isn't Found`; // when condition false then return.
}
const data = [10, 20, 30, 40, 50]; //these are all data.
const target = 30; // Our target value.
linearSearch(data, target); // Function called.
