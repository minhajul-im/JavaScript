/**
 * What is deep clone?
 * a deep clone refers to creating a copy of an object that is completely independent of the original object. It means that the cloned object is a new object with all its properties and nested objects duplicated, rather than just copying references to the nested objects.

A deep clone is necessary when you want to create a full and independent copy of an object, including all its nested properties, without any shared references between the original and cloned objects. This is particularly important when dealing with complex data structures or nested objects, as shallow copies (which copy only the top-level properties) may still have references to the original nested objects, leading to unintended side effects when modifying the cloned object.
 */

const person = {
  name: "MinhaJ",
  address: {
    contact: {
      email: "programmer.minhajul@gmail.com",
      phone: "+8801 301 109 244",
    },
    place: "Uttara, Dhaka",
  },
};

// clone from person
const personClone = { ...person };

//everything is okay but when you change any key & value update then will create problem.

console.log(personClone);
console.log(person);

// what will happen when i change email from "personClone object"
personClone.address.contact.email = "minhajul@gmail.com";

// what will happen when i change place from "person object"
person.address.place = "Dhaka, Bangladesh";

// now we see both object, person & clonePerson.
console.log(person);
console.log(personClone);

/**
 * I have changed only the email from "personClone",why are they both changing objects? This is the fact, it's a huge issue.
 */

/**
 * TODO: HOW CAN WE SOLVE THIS PROBLEM?
 */

const student = {
  name: "MinhaJ",
  address: {
    contact: {
      email: "programmer.minhajul@gmail.com",
      phone: "+8801 301 109 2**",
    },
    place: "Uttara, Dhaka",
  },
};

const string = JSON.stringify(student);
const studentClone = JSON.parse(string);

//look like the same but studentClone object it's totally independent object. studentClone object doesn't care, what have the changed student object.
console.log(student);
console.log(studentClone);

student.address.contact.email = "hello@minhajul.com";
studentClone.address.contact.phone = "+8801 996 222 5**";

console.log(typeof studentClone);

// now solve this problem, if you wanna change both object they don't care! they don't care, who changed what?
console.log(student);
console.log(studentClone);
