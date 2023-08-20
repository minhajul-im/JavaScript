const str = "Hello-Bangladesh";

// length: This method returns the length of the current string.
const length = str.length; // 16

//  Template String You can use multi line string and you can use function and condition whatever it is.
const templateString = `Hello Bangladesh, It's a small country. Many population live in Bangladesh.`;

//includes(): This method returns a boolean indicating whether or not the specified substring is contained in the current string.
const includes = str.includes("d"); // true

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
