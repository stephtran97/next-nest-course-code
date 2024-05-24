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
function getFirst<T>(arr: T[], n: number) {
  return arr.slice(0, n);
}
function compare<A, B>(a: A, b: B) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a < b ? -1 : a > b ? 1 : 0;
  }
}
function findByName<T extends { name: string }>(items: T[], name: string) {
  return items.find((item) => item.name === name);
}

interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

// Define a new type PickAb using the Pick utility type to select only the "a" and "b" properties from the IAbc interface.
type PickAb = Pick<IAbc, 'a' | 'b'>;
let pickAbObject: PickAb = {
  a: 1,
  b: 'test'
};
type PickGeneric<T, K extends keyof T> = {
  [P in K]: T[P];
};

type IsUser<T> = T extends { name: string; age: number } ? true : false;

type T1 = IsUser<{ name: 'Gabriel' }>; // false
type T2 = IsUser<{ name: 'Alice'; age: 32 }>; // true
// Exercise 1
type IsArray<T> = T extends unknown[] ? true : false; // TODO

type CT1 = IsArray<number[]>; //=> true
type CT2 = IsArray<['a', 'b', 'c']>; //=> true
type CT3 = IsArray<string>; //=> false
type CT4 = IsArray<string | null | undefined>; //=> false

// Exercise 2
type If<T1 extends boolean, T2, T3> = T1 extends true ? T2 : T3; // TODO

type TT1 = If<true, string, number>; //=> string
type TT2 = If<false, string, number>; // => number
type TT3 = If<boolean, string, number>; //=> string | number // Dont worry !!! We will cover it later

// Exercise 3
/**
 * Type the `getWithDefault` function. It takes a key, an object
 * and a default value.
 *  - If the key exists on the object, it returns the corresponding
 *    value with the right type.
 *  - Otherwise, it returns the default value.
 *
 * Note: The type of the property and the type of the default value
 * can be different.
 */

type GetWithDefault<Key, Obj, Default> = Key extends keyof Obj
  ? Obj[Key]
  : Default; // TODO

function getWithDefault<K extends string, O extends {}, D>(
  key: K,
  obj: O,
  defaultValue: D
): GetWithDefault<K, O, D> {
  return (obj as any)[key] ?? defaultValue;
}

const t1 = getWithDefault('title', { title: 'Conditional Types' }, 'hello'); //=> string
// getWithDefault("oops", { title: "Conditional Types" }, undefined); => undefined
// getWithDefault("age", { age: 29 }, 0); => number
// getWithDefault("friends", { age: 29 }, ["Bob"]); => string[]


