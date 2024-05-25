# Module 1: TypeScript

## Reference:

- Book: `Effective TypeScript`

## Libraries

- `ts-node`: Library for compile + run file .ts

## Table of Content

- [Session 1](#session-1-20240511)
- [Session 2](#session-2-20240516)
- [Session 3](#session-3-20240518)
- [Session 4](#session-4-20240523)
- [Session 5](#session-5-20240525)
- [Practical TypeScript](#practical-typescript)

### Session 1 20240511:

[Jump up &#x21e7;](#table-of-content)

#### 1. Types system: [&#x21e7;](#session-1-20240511)

- JavaScript types: `number`, `string`, `boolean`, `null`, `undefined`, `void`, `object`, `array`, `function`

  ```ts
  // JS types:
  let fistName = 'John';
  let isAdmin = false;
  let age = 30;

  let duties = ['write code', 'fix bugs'];

  let car = null;
  let bicycle = undefined;

  let work = () => {
    console.log('working...');
  };

  let salary = 50n;
  let logo = Symbol('emerald');

  let all = [fistName, isAdmin, age, car, bicycle, duties, work, salary, logo];

  for (let item of all) {
    console.log(String(item) + ' is ' + typeof item);
  }

  /**
   * TS types:
   * any
   * unknown
   * never
   * arrays
   * tuples
   * Enums
   */
  ```

- TypeScript types: `any`, `never`, `unknown`, `tuple`, `enum`, others(type alias)
- supertype and subtype:

  ```mermaid
  flowchart TD;
  any-unknown(any/unknown) --> types
    subgraph types[Types]
      subgraph primitive-types[Primitive types]
        direction TB
        number --> number-enum
        string --> string-enum
        boolean
        symbol --> unique-symbol
      end
      subgraph compound-types[Compound types]
        direction TB
        Object --> Array
        Array --> Class
        Array --> Tuple
        Array --> Regex
        Array --> Function
      end
      TypeAlias
    end
  types --> null & undefined/void --> never/any
  ```

  - Top level supertype will be `any/unknown`
  - Narrow down the flow will be subtypes i.e.
    - `primitive/compound types` is subtype of `any/unknown`;
    - `null/undefined/void` is subtype of `primitives/compound types`
    - ...
    - `never` will be subtype of all other types
    - Only subtype can be assigned to supertype; super type cannot be assigned to subtype
    - `any` can be both supertype of all types and subtype of all types

#### 2. Type annotation [&#x21e7;](#session-1-20240511)

```ts
const myVar: string = 'my var';
```

- We are annotate `myVar` will have the type of `string` here

#### 3. Primitive types: [&#x21e7;](#session-1-20240511)

- Strings

```ts
// String Variable With Explicit Annotation
let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
```

- Number

```ts
// Number Variable with explicit annotation
let numCatLives: number = 9;
numCatLives += 1;
numCatLives = 'zero'; //Error!
```

- Boolean

```ts
// Explicitly typed boolean variable:
let gameOver: boolean = false;
gameOver = true;
gameOver = 'true'; //error!!
```

#### 4. Type inference [&#x21e7;](#session-1-20240511)

```ts
// Type Inference
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other Two';
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = 'asd';
```

#### 5. Duck typing [&#x21e7;](#session-1-20240511)

#### 6. `any` type [&#x21e7;](#session-1-20240511)

#### 7. `unknown` type [&#x21e7;](#session-1-20240511)

#### 8. `unknown` vs `any` [&#x21e7;](#session-1-20240511)

#### 9. `never` [&#x21e7;](#session-1-20240511)

#### 10. Compound types - Function types: [&#x21e7;](#session-1-20240511)

- Function params type
- Function return type
- Function signatures
- Anonymous function
- `void`
- `never`

#### 11. Session 1 practices &#10060;

### Session 2 20240516:

[Jump up &#x21e7;](#table-of-content)

#### 1. Compound types - Object types: [&#x21e7;](#session-2-20240516)

- Syntax
- Excess property checking
- Type alias
- Nested object
- Supertype and subtype of object
- Reading properties
- Reading several properties at once

#### 2. Array types [&#x21e7;](#session-2-20240516)

#### 3. Union types [&#x21e7;](#session-2-20240516)

#### 4. Literal types [&#x21e7;](#session-2-20240516)

#### 5. Tuples [&#x21e7;](#session-2-20240516)

#### 6. Variadic Tuple (using `...` operator) [&#x21e7;](#session-2-20240516)

#### 7. Enum: Reading [Don't use Enum in TypeScript](https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh#:~:text=Excessive%20use%20of%20regular%20ENUMs,new%20values%20can%20be%20added){:target="\_blank"}

- Instead using union types
- Define to Object and types based on that Object

#### 8. Interface [&#x21e7;](#session-2-20240516)

#### 9. Type and interface [&#x21e7;](#session-2-20240516)

#### 10. Session 2 practices &#10060;

### Session 3 20240518:

[Jump up &#x21e7;](#table-of-content)

#### 1. Types narrowing (types guards): [&#x21e7;](#session-3-20240518)

- `typeof` guards
- Truthiness guards
- Equality narrowing
- `in` operator narrowing
- `instanceof` narrowing
- Type predicates (using `is` operator)
- Discriminated unions

#### 2. Type assertion [&#x21e7;](#session-3-20240518)

#### 3. Generic types: [&#x21e7;](#session-3-20240518)

- Generic syntax,
- Constraining generic types
- Multiple generic types

#### 4. Session 3 practices &#10060;

### Session 4 20240523:

[Jump up &#x21e7;](#table-of-content)

#### 1. `in` keyword: [&#x21e7;](#session-4-20240523)

#### 2. `keyof` keyword: [&#x21e7;](#session-4-20240523)

#### 3. Mapped Types: [&#x21e7;](#session-4-20240523)

Reference: [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html){:target="\_blank"}

- `Partial, Required, Readonly`
- `Pick`
- `Record`
- `Omit`
- `readonly`, `const`

#### 4. Conditional types: [&#x21e7;](#session-4-20240523)

- Syntax
- Type constrains
- Conditional type chaining

#### 5. Session 4 practices &#10060;

### Session 5 20240525:

[Jump up &#x21e7;](#table-of-content)

#### 1. `infer` keyword: [&#x21e7;](#session-5-20240525)

> **_NOTE:_** `infer` keyword only works in conditional types

- Conditional type inference

  - In other words, we are inferring a new generic type named `U` that is the type of the `id` property of the object `T`. If the object `T` does not have an `id` property, then we simply return `never`.

    ```ts
    type inferFromPropertyType<T> = T extends { id: infer U } ? U : never;
    function testInferFromPropertyType<T>(arg: inferFromPropertyType<T>) {}
    testInferFromPropertyType<{ id: string }>('test'); // string
    testInferFromPropertyType<{ id: number }>(1); // number
    ```

- Type inference from Function Signatures

  - For example, we can retrieve the list of parameters as a tuple using `infer`:

    ```ts
    type Parameters<F> = F extends (...params: infer P) => any ? P : never;

    type Fn = (name: string, id: number) => boolean;

    type T1 = Parameters<Fn>; // => [name: string, id: number]
    ```

  - These inferred types can be inferred from either the function arguments or from the function return type. Let’s take a look at an example of this:

    ```ts
    type inferredFromFnParam<T> = T extends (a: infer U) => void ? U : never;
    function testInferredFromFnParam<T>(arg: inferredFromFnParam<T>) {}

    testInferredFromFnParam<(a: number) => void>(1); // number
    testInferredFromFnParam<(a: string) => void>('test'); // string
    ```

    - Here, we have a conditional type named `inferredFromFnParam`, which will infer the type of `U` from the argument named `a` of a function signature that has a single parameter, and returns `void`.

    - If the function signature does not match what is specified by the `extends` clause, that is, it does not take a single parameter and does not return `void`, then the inferred type will be `never`.

  - In a similar manner, we can also infer a type from the return type of a function, as seen in the following example:

    ```ts
    type inferredFromFnReturnType<T> = T extends (a: string) => infer U
      ? U
      : never;

    function testInferredFromReturnType<T>(arg: inferredFromFnReturnType<T>) {}

    testInferredFromReturnType<(a: string) => number>(1); // number
    testInferredFromReturnType<(a: string) => boolean>(false); // false
    ```

- Type inference from arrays

  - There is one other syntax that can be used for an inferred type, which is used when inferring a type from an array.

    ```ts
    type inferredTypeFromArray<T> = T extends (infer U)[] ? U : never;

    function testInferredFromArray<T>(args: inferredTypeFromArray<T>) {}

    testInferredFromArray<string[]>('test');
    testInferredFromArray<number[]>(1);
    ```

- Type inference with Tuples

  - `infer` can be used inside any kind of type-level data structure, including tuples!

  - You can use it to retrieve the **first element** of the list:

    ```ts
    type Head<Tuple> = Tuple extends [infer U, ...unknown[]] ? U : never;

    type T1 = Head<['alpha', 'beta', 'gamma']>; // => "alpha"
    type T2 = Head<[]>; // => never
    ```

  - Or the **rest** of the list:

    ```ts
    type Tail<Tuple> = Tuple extends [unknown, ...infer U] ? U : [];

    type T1 = Tail<['alpha', 'beta', 'gamma']>; // => ["beta", "gamma"];
    type T2 = Tail<['alpha']>; // => []
    type T3 = Tail<[]>; // => []
    ```

    -You're also allowed to use infer **several times** in a pattern:

    ```ts
    type FirstAndLast<Tuple> = Tuple extends [infer J, ...unknown[], infer K]
      ? [J, K]
      : [];

    type T1 = FirstAndLast<[1]>; // => []
    type T2 = FirstAndLast<[1, 2]>; // => [1, 2]
    type T3 = FirstAndLast<[1, 2, 3]>; // => [1, 3]
    type T4 = FirstAndLast<[1, 2, 3, 4]>; // => [1, 4]
    ```

  - [Practice `infer` keyword](./2-advanced-types/infer-keyword/infer-keyword-practice.ts){:target="\_blank"}&#9989;

#### 2. Template literal types: [&#x21e7;](#session-5-20240525)

- Basics
- Templates containing primitive types
- Templates and union types
- Helper functions
- Templates and object properties

#### 3. The Union type: [&#x21e7;](#session-5-20240525)

- The union type multiverse
- The distributive natures of Union types
- Unions and Conditional types

#### 4. `Prettify` type helper: [&#x21e7;](#session-5-20240525)

### Practical TypeScript:
