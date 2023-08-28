// testing string
const str = "Hello-Bangladesh";

// length: This method returns the length of the current string.
const length = str.length; // 16

//  Template String You can use multi line string and you can use function and condition whatever it is.
const templateString = `,It's a small country. Many population live in Bangladesh.`;

//includes(): This method returns a boolean indicating whether or not the specified substring is contained in the current string.
const includes = str.includes("d"); // true

// indexOf(): This method returns the index of the first occurrence of the specified substring in the current string.
const indexOf = str.indexOf("a"); // a

//search(): This method returns the index of the first occurrence of the specified regular expression in the current string.
const search = str.search("l"); // 2

//replaceAll(): This method replaces all occurrences of the specified regular expression with the specified replacement string.
const replaceAll = templateString.replaceAll(`Bangladesh`, `Dhaka`); //Hello Dhaka, It's a small country. Many population live in Dhaka.

//toLocaleLowerCase(): This method converts the current string to lowercase, using the current locale.
const lowercase = str.toLocaleLowerCase(); // hello bangladesh

// toLocaleUpperCase(): This method converts the current string to uppercase, using the current locale.
const uppercase = str.toUpperCase(); // HELLO BANGLADESH

//match(): This method returns an array of matches for the specified regular expression in the current string.

//Using a regular expression without the 'g' flag to find the first occurrence of 'Bangladesh'
const match = templateString.match(/Bangladesh/); // index 6

// Using a regular expression with the 'g' flag to find all occurrences of 'Bangladesh'
const matchGlobal = templateString.match(/Bangladesh/g); // [Bangladesh, Bangladesh]

// substring(): This method returns the index of the first occurrence of the specified substring in the current string.
const subString = str.substring(3, 5); // lo

// charAt(): This method returns the character at the specified index of the current string.
const charAt = str.charAt(6); // B

// charCodeAt(): This method returns the Unicode code point of the character at the specified index of the current string.
const charCodeAt = str.charCodeAt(5); // 45

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
