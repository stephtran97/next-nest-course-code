// Challenge 1 DONE
type UnpackArray<T extends Array<any>> = T extends (infer U)[] ? U : never; // TODO
let someStringType: UnpackArray<string[]>; // expect string type

// Challenge 2 DONE
type UnpackPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never; // TODO
let someString2: UnpackPromise<Promise<string>>; // expected string type
let someNumber2: UnpackPromise<Promise<number>>; // expected number type
let someBoolean2: UnpackPromise<Promise<boolean>>; // expected boolean type

// Challenge 3 DONE
type Employee = {
  name: string;
  age: number;
};

type EmployeeValues<T> = T extends { name: infer J; age: infer K }
  ? [J, K]
  : never; // TODO

let employeeValues: EmployeeValues<Employee>; // expect a tuple type with values [string, number]

// Exercise 1 DONE
/**
 * implement a generic to extract the type of the
 * `name` property from an object type.
 *
 * Note: This generic must also accept objects that
 *       Don't have a name property, and return
 *       `undefined` in this case.
 */

type GetName<Input> = Input extends { name: infer U } ? U : undefined;

type res1 = GetName<{ name: 'Quoc' }>; // Quoc
type res2 = GetName<{ name: string; age: number }>; // string
type res3 = GetName<{ age: number }>; // undefined
type res4 = GetName<{
  name: { firstName: string; lastName: string };
  age: number;
}>; // { firstName: string; lastName: string }

// Exercise 2 DONE
/**
 * Implement a generic that drops the first
 * element of a tuple and returns all other
 * elements.
 */
type DropFirst<Tuple extends any[]> = Tuple extends [infer First, ...infer Rest]
  ? Rest
  : [];

type res1 = DropFirst<[1, 2, 3]>; // [2,3]
type res2 = DropFirst<[1]>; // []
type res3 = DropFirst<[]>; // []

// Exercise 3 DONE
/**
 * Implement the AND logical door:
 * AND<true, true> => true
 * AND<false, false> => false
 * AND<true, false> => false
 * AND<false, true> => false
 */

type AND<A, B> = [A, B] extends [true, true] ? true : false;

type res1 = AND<true, true>; // true
type res2 = AND<false, false>; // false
type res3 = AND<true, false>; // false
type res4 = AND<false, true>; // false
