// number : super type - parent
// number enum: sub type - children

const num = 1;
console.log(num);

// Duck Typing
// Declare a variable 'obj1' and initialize it with an object that has an 'id' property and a 'print' method
let obj1 = { id: 1, print() {} };

// Declare a variable 'obj2' and initialize it with an object that has an 'id' property, a 'print' method, and a 'select' method
let obj2 = { id: 2, print() {}, select() {} };

// Attempt to assign 'obj2' to 'obj1'. This won't cause a type error because 'obj2' has all of the methods that are present in the type of 'obj1'
obj1 = obj2;

// Attempt to assign 'obj1' to 'obj2'. This will cause a type error because 'obj1' is missing the 'select' method that is present in the type of 'obj2'
obj2 = obj1;
// Any

// Unknown
function calculate(a: number, b: number, c: number): number {
  // Return the result of (a * b) + c
  return a * b + c;
}

// Objects as parameters:
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Thomas', last: 'Jenkins' });

const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
printName(singer);
// trigger excess property checking - directly assign
printName({ first: 'Mick', last: 'Jagger', age: 473, isAlive: true });

type Exclamation = [...string[], '!'];

type NoneEmpty = [string, ...string[]];
type Padded = [0, ...string[], 0];

type AcceptedPhoneNum =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';
type PhoneNumber = [
  '0',
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum,
  AcceptedPhoneNum
];
