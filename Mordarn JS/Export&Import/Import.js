// name import same name use
import { sub, sum } from "./Export.js";

sub(20, 10);
sum(10);

// name import but change name
import { sub as subtract, sum as addition } from "./Export.js";

subtract(20, 10);
addition(20);
