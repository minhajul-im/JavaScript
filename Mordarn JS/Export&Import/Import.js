// name import same name use
import { sub, sum } from "./Export.js";

sub(20, 10);
sum(10);

// name import but change name
import { sub as subtract, sum as addition } from "./Export.js";

subtract(20, 10);
addition(20);

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
