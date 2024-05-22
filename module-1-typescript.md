# Module 1: TypeScript

## Reference:

- Book: `Effective TypeScript`

## Libraries

- `ts-node`: Library for compile + run file .ts

## Table of Content

- [Session 1](#session-1-20240511)
- [Session 2](#session-2-20240516)
- [Session 3](#session-3-20240518)

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

#### 7. Enum: Reading [Don't use Enum in TypeScript](https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh#:~:text=Excessive%20use%20of%20regular%20ENUMs,new%20values%20can%20be%20added)

- Instead using union types
- Define to Object and types based on that Object

#### 8. Interface [&#x21e7;](#session-2-20240516)

#### 9. Type and interface [&#x21e7;](#session-2-20240516)

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
