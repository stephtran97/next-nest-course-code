// Practice 1

/**
 * Type the `move` function so that the `direction`
 * parameter can only be assigned to "backward" or "forward".
 */

function move(direction: 'backward' | 'forward') {
  //
}

// ✅
move('backward');

// ✅
move('forward');

// @ts-expect-error: ❌ not supported
move('left');

// @ts-expect-error: ❌ not supported
move('right');
// Practice 2

/**
 * `pickOne` takes 2 arguments of potentially different
 * types and return either one or the other at random.
 * Make  generic!s
 */
function pickOne<T, K>(a: T, b: K): T | K {
  return Math.random() > 0.5 ? a : b;
}

// const res1 = pickOne(true, false); // boolean
// const res2 = pickOne(1, 2); // 1 | 2
// const res3 = pickOne(2, 'some string'); // 2 | "some string">
// const res4 = pickOne(true, 7); //  true | 7

// Practice 3

/**
 * The `merge` function accepts an object of type `A`
 * and an object of type `B`, and return an object
 * with all properties of `A` and `B`.
 * Make it generic!
 */
function merge<T extends {}, K extends {}>(a: T, b: K): T & K {
  return { ...a, ...b };
}

// const res1 = merge({ name: 'Bob' }, { age: 42 }); // { name: string } & { age: number }
// const res2 = merge({ greeting: 'Hello' }, {}); // { greeting: string }
// const res3 = merge({}, { greeting: 'Hello' }); //  { greeting: string }
// const res4 = merge({ a: 1, b: 2 }, { c: 3, d: 4 }); // { a: number; b: number } & { c: number; d: number }

// Practice 4

/**
 * 1. implement a generic to get the union of all keys of an object type.
 */
type Keys<Obj> = keyof Obj;

type T1 = Keys<{ a: number; b: string }>; // "a" | "b"
type T2 = Keys<{ a: number; b: string; c: unknown }>; // "a" | "b" | "c"
type T3 = Keys<{}>; // never
type T4 = Keys<{ [K in string]: boolean }>; // string

// Practice 5

/**
 * 2. implement a generic to get the union of all values in an object type.
 */
type ValueOf<Obj> = Obj[keyof Obj];

// type res1 = ValueOf<{ a: number; b: string }>; //  number | string
// type res2 = ValueOf<{ a: number; b: string; c: boolean }>; // number | string | boolean>
// type res3 = ValueOf<{}>; // never
// type res4 = ValueOf<{ [K in string]: boolean }>; // boolean

// Practice 6

/**
 * Create a generic that removes the `id` key
 * from an object type.
 */
type RemoveId<Obj> = Omit<Obj, 'id'>;

// type res1 = RemoveId<{
//   id: number;
//   name: string;
//   age: unknown;
// }>; // { name: string; age: unknown }

// type res2 = RemoveId<{
//   id: number;
//   title: string;
//   content: string;
// }>; // { title: string; content: string }

// Practice 7

// create a generic that makes the `id` key of an object type optional.
type MakeIdOptional<Obj extends { id: number | string }> = Partial<
  Pick<Obj, 'id'>
> &
  Omit<Obj, 'id'>; // TODO

// type res1 = MakeIdOptional<{
//   id: number;
//   name: string;
//   age: unknown;
// }>; // { id?: number } & { name: string; age: unknown }

// type res2 = MakeIdOptional<{
//   id: string;
//   title: string;
//   content: string;
// }>; // { id?: string } & { title: string; content: string }
// type Prettify<T> = {
//   [K in keyof T]: T[K];
// };
// type Test = Prettify<res1>;
// Practice 8

/**
 * Since intersections are applied recursively,
 * how would you write an `Assign<A, B>` type-level
 * function that matches the behavior of `{...a, ...b}`,
 * and overrides properties of `A` with properties of `B`?
 */
type Assign<A, B> = Omit<A, keyof B> & B;

const assign = <A, B>(obj1: A, obj2: B): Assign<A, B> => ({
  ...obj1,
  ...obj2
});

// Override `id`
// type res1 = Assign<{ name: string; id: number }, { id: string }>; // { name: string } & { id: string }

// // Override `age` and `role`
// type res2 = Assign<
//   { name: string; age: string; role: string },
//   { age: 42; role: 'admin' }
// >; // { name: string } & { age: 42; role: "admin" }

// // No overlap
// type res3 = Assign<{ name: string; id: number }, { age: number }>; // { name: string; id: number } & { age: number }
// // Prettify type
// Practice 9

/**
 * Implement a generic that returns the first type
 * in a tuple.
 *
 * Hint: How would you do it if `Tuple` was a value?
 */
type First<T extends unknown[]> = T[0];

type res1 = First<[]>; // undefined
type res2 = First<[string]>; // string
type res3 = First<[2, 3, 4]>; // 2
type res4 = First<['a', 'b', 'c']>; // "a"

// Practice 10

/**
 * Implement a generic that adds a type to the end
 * of a tuple.
 */

type Append<T extends unknown[], K> = [...T, K];

// type res1 = Append<[1, 2, 3], 4>; // [1, 2, 3, 4]
// type res2 = Append<[], 1>; // 1

// Practice 11

/**
 * Implement a generic that concatenates two tuples.
 */

type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K];

// type res1 = Concat<[1, 2, 3], [4, 5]>; // [1, 2, 3, 4, 5]
// type res2 = Concat<[1, 2, 3], []>; // [1, 2, 3]

// Practice 12

/**
 * Implement a generic taking a tuple and returning
 * an array containing the union of all values in this tuple.
 */

type TupleToArray<T extends unknown[]> = T[number][]; // TODO

// type res1 = TupleToArray<[1, 2, 3]>; // (1 | 2 | 3)[]
// type res2 = TupleToArray<[number, string]>; // (number | string)[]
// type res3 = TupleToArray<[]>; // never[]
// type res4 = TupleToArray<[1] | [2] | [3]>; // (1 | 2 | 3)[]

// Practice 13

/**
 * Create a generic `NonEmptyArray` type that represents
 * Arrays that contain at least one element.
 */

type NonEmptyArray<T> = [T, ...T[]]; // TODO

function sendMail(addresses: NonEmptyArray<string>) {
  /* ... */
}

sendMail(['123 5th Ave']); // ✅
sendMail(['75 rue Quincampoix', '75003 Paris']); // ✅
sendMail([]); // ^ ❌ `[]` isn't assignable to `NonEmptyArray<string>`

// Practice 14

/**
 * Implement a generic that gets the length
 * of a tuple type.
 */

type Length<T extends unknown[]> = T['length']; // TODO

// type res1 = Length<[]>; // 0
// type res2 = Length<[any]>; // 1
// type res3 = Length<[any, any]>; // 2
// type res4 = Length<[any, any, any]>; //3;

// Practice 15

/**
 * Implement a generic that gets the length
 * of a tuple type, and adds one to it.
 */

type LengthPlusOne<T extends unknown[]> = [...T, any]['length'];

// type res1 = LengthPlusOne<[]>; // 1
// type res2 = LengthPlusOne<[any]>; // 2
// type res3 = LengthPlusOne<[any, any]>; // 3
// type res4 = LengthPlusOne<[any, any, any]>; // 4
