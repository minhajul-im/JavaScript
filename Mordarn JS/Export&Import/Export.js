// Name Export

const sub = (a, b) => a - b;

const sum = (a) => a + a;

// it's a name export
export { sub, sum };

// export default
// export default const multi = (x) => x * x;

//multiple function default export
export const divided = (a, b) => a / b;
export const modulus = (a, b) => a % b;
// these are function you can change name,
export default { divided, modulus };
