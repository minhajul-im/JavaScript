/**
 * Mutable string in Javascript
It's important to know that in JavaScript, strings are immutable. This means that once a string is created, its contents cannot be changed. Instead, you must create a new string representing the modified version when you want to modify a string.
 */

const str = "Hello Bangladesh";

//  Template String You can use multi line string and you can use function and condition whatever it is.
const templateString = `,It's a small country. Many population live in Bangladesh.`;

//lastIndexOf(): This method returns the index of the last occurrence of the specified substring in the current string.
const lastIndexOf = str.lastIndexOf("B"); // B

//slice() method is used to extract a section of a string or an array and returns a new string or array containing the selected elements. The method takes two arguments: the start index and the end index (optional).
const slice1 = str.slice(0, 5); // Hello
// take last index
const slice2 = str.slice(-4); // desh
// cut first index but return remain data
const slice3 = str.slice(6); // Bangladesh

//concat(): This method concatenates the specified strings to the end of the current string.
const concat = str.concat(templateString);

//split(): This method splits the current string into an array of strings, based on the specified separator.
const split = str.split("");

//trim() method in JavaScript returns a new string by removing leading and trailing whitespace characters from the original string.
const trimStr = "     minhaj      ";
const trim = trimStr.trim();

//padEnd() & padStart() method in JavaScript returns a new string by padding the end of the original string with a specified character until the resulting string reaches the desired length.
const padStart = trimStr.padStart(30, "*");
const padEnd = trimStr.padEnd(30, "*");

//join() method is available for arrays and is used to concatenate array elements with a specified separator.
const join = str.split("").join("_");
