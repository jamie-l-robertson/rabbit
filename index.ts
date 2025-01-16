/**
 * Adds two numbers together.
 *
 * @param a - The first number to be added
 * @param b - The second number to be added
 * @returns The sum of the two input numbers
 */
export function adddNumbers(a: number, b: number) {
  return a + b;
}

const num1 = 5;
const num2 = 10;

const reslt = adddNumbers(num1, num2);

console.log("The sum of " + num1 + " and " + num2 + " is: " + reslt);
