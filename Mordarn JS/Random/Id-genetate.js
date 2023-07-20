// generate id

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();

const id = getId.next().value;

console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
