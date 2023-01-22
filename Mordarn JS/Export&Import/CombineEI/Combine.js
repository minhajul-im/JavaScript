/**
 * Combining exports and imports in JavaScript allows you to modularize your code and organize it into separate files or modules, making your codebase more maintainable and readable. This is an essential concept in modern JavaScript development, especially when working on larger projects.
 */

import * as cal from "./Import.js";

console.log(cal.calculate.minus(10));
console.log(cal.calculate.multi(10));
console.log(cal.math.compere(10, 10));
