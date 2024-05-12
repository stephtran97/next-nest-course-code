/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a function that returns the multiplication of two arbitrary numbers and returns a type error when passed a string
*/
const mutiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Simulate a type error for the returned value of a function of arbitrary type
*/
const fail = (param: string): string => {
  return param;
};
fail(5);
/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an arrow function that returns the addition of a number and a boolean type
*/
const add = (num1: number, bool: boolean): number => {
  return num1 + bool;
};
/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function that makes words plural by adding "s"
*/
const pluralize = (noun: string): string => {
  return noun + 's';
};
/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Write a function that adds or subtracts 1 from a number based on a boolean evaluation. If the boolean is true, it adds 1 otherwise subtracts 1 from the number
*/
const calculate = (num: number, bool: boolean) => (bool ? num + 1 : num - 1);
