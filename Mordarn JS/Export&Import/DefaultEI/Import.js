// name import default but you can change your function name
import multiple from "./Export.js";
multiple(10);

import { divided, modulus } from "./Export.js";
divided(10, 2);
modulus(10, 2);
// import if you wanna change name,
import { divided as division, modulus as percentage } from "./Export.js";
division(10, 2);
percentage(10, 2);
