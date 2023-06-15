class Parents {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  }
  fName() {
    console.log(`My father's name ${this.fatherName}.`);
  }
  mName() {
    console.log(`My mother's name ${this.motherName}`);
  }
}

class Child extends Parents {
  constructor(fatherName, motherName, son, daughter) {
    super(fatherName, motherName);
    this.son = son;
    this.daughter = daughter;
  }
  dName() {
    console.log(`${this.daughter} & ${this.son}`);
  }
  family() {
    console.log(
      `Father: ${this.fatherName}, Mother: ${this.motherName}, Son: ${this.son}, Daughter: ${this.daughter}`
    );
  }
  fatherMotherName() {
    return `${this.fName()} & ${this.mName()}`;
  }
}
const familyName = new Child("Mr. Mark", "Miss. Jenifa", "Jonas", "Monica");

familyName.family();
