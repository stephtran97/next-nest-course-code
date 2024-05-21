/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an object type that has 3 properties (name, age, job) and create an object from this type
*/
type Person = {
  name: string;
  age: number;
  job: string;
};
const john: Person = {
  name: 'john',
  age: 25,
  job: 'dev'
};
/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Access the published property from the following object using the bracket notation and the dot notation
*/

type OnlineCourse = {
  name: string;
  platform: string;
  features: string[];
  'meta-data': {
    published: boolean;
  };
};

let myCourse: OnlineCourse = {
  name: 'TS Bootcamp',
  platform: 'Udemy',
  features: ['Practical', 'Exercise Oriented', 'Modern TS Concepts'],
  'meta-data': {
    published: true
  }
};
// const published = myCourse['meta-data'].published; // by dot notation
const published = myCourse['meta-data']['published']; // by bracket notation

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Fix the error in the following code by modifying the type Product. Do not make changes to the product1 or product2 objects
*/

type Product = {
  name: string;
  publishedStatus?: boolean; // make this property optional
};

const product1: Product = { name: 'TS Bootcamp' };
const product2: Product = { name: 'TS Bootcamp', publishedStatus: true };

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
What will the product object log?
*/

const onlineCourse = { name: 'TS Bootcamp', price: 10.99 };
const product = { ...onlineCourse, released: true };
console.log(product); // { name: 'TS Bootcamp', price: 10.99, released: true }

/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Create a product type and add a holidaySales method that return a string “Sale is On”. Finish by creating an object from the type and logging the string on the console
*/
type IProduct = {
  holidaySales: () => string;
};
// type IProduct = {
//   holidaySales(): string;
// };
const p1: IProduct = {
  holidaySales: () => 'Sale is On'
};
console.log(p1.holidaySales());
