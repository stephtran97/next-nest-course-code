# Module 1: TypeScript

## Reference

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

### Session 1 20240511

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

### Session 2 20240516

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

#### 10. Session 2 practices &#10060;

### Session 3 20240518

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

### Session 4 20240523

[Jump up &#x21e7;](#table-of-content)

#### 1. `in` keyword: [&#x21e7;](#session-4-20240523)

- JavaScript and, subsequently, TypeScript allow us to interrogate an object and see if it has a property using the `in` operator. We can use it as a narrowing:

  ```ts
  // Define the IIdName interface
  interface IIdName {
    id: number;
    name: string;
  }

  // Define the IDescrValue interface
  interface IDescrValue {
    descr: string;
    value: number;
  }
  // Define the printNameOrValue function which takes an object
  // that implements either the IIdName or IDescrValue interface
  function printNameOrValue(obj: IIdName | IDescrValue): void {
    // Use the 'in' operator to check if the object has an 'id' property
    if ('id' in obj) {
      console.log(`obj.name : ${obj.name}`);
    }
    // Use the 'in' operator to check if the object has a 'descr' property
    if ('descr' in obj) {
      console.log(`obj.value : ${obj.value}`);
    }
  }
  // Calling the printNameOrValue function with two objects with different properties
  printNameOrValue({
    id: 1,
    name: "nameValue",
  });
  printNameOrValue({
    descr: "description",
    value: 2,
  });

  // OUTPUT
  obj.name : nameValue
  obj.value : 2
  ```

#### 2. `keyof` keyword: [&#x21e7;](#session-4-20240523)

- TypeScript allows us to iterate through the properties of a type and extract the names of its properties through the **`keyof`** keyword, which we can use as a **string literal type**.

  ```ts
  // Define an interface `IPerson` with properties `id` and `name`
  interface IPerson {
    id: number;
    name: string;
  }

  // Generate a string literal type for the properties of the interface `IPerson`
  type PersonPropertyName = keyof IPerson;
  // => generate a string literal type for the properties found in the IPerson interface
  type PersonPropertyLiteral = 'id' | 'name';
  // Define a function `getProperty` that accepts two parameters
  function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
  }

  // Call the function `getProperty` with argument `"id"` and an object with `id` and `name` properties
  getProperty('id', { id: 1, name: 'firstName' }); // "1 = firstName"

  // Call the function `getProperty` with argument `"name"` and an object with `id` and `name` properties
  getProperty('name', { id: 2, name: 'secondName' }); // "name = secondName"

  // Call the function `getProperty` with argument `"telephone"` and an object with `id` and `name` properties
  getProperty('telephone', { id: 3, name: 'thirdName' }); // error
  ```

  > **_Note_**: Using the keyof keyword will generate a string literal that automatically includes all of the properties of an interface. This technique is obviously preferable to having to maintain string literals manually.

  ```ts
  type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum master';

  type Employee = {
    name: string;
    position: Position;
  };

  type EmployeeKeys = keyof Employee; // 'name' | 'position'

  const john: Employee = {
    name: 'John',
    position: 'Programmer'
  };

  john['name'];

  function getProperty2(arg: any, key: string) {
    console.log(arg[key]);
    return arg[key];
  }

  function getProperty<T, K extends keyof T>(arg: T, key: K): T[K] {
    console.log(arg[key]);
    return arg[key];
  }

  const johnsName = getProperty(john, 'name');
  getProperty(john, 'position'); // "Programmer"
  getProperty(john, 'age'); // error no age property
  ```

#### 3. Mapped Types: [&#x21e7;](#session-4-20240523)

> **_Reference_**: [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

- `Partial, Required, Readonly`

  - `Partial`: make all properties of a type optional

    ```ts
    type Partial<T= {
      [P in keyof T]?: T[P];
    };
    ```

  - `Required`: make all properties required

    - `-?` operation: turn all optional to required; because normally in generic which one is optional will resulted as optional

    ```ts
    type Required<T> = {
      [P in keyof T]-?: T[P];
    };
    ```

  - `Readonly`: make all properties readonly

    ```ts
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    };
    ```

- `Pick`: The Pick mapped type is used to construct a type based on a subset of properties of another type.

  ```ts
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

  console.log(pickAbObject);
  ```

- `Record` is used to create a type with a set of properties `K` of type `T`.

  - Syntax: `Record<Keys, Type>`, where Keys is the set of keys and Type is the type of the values for those keys.

    ```ts
    type RecordedCd = Record<'c' | 'd', number>;

    // Declare a variable of type RecordedCd and assign it an object with properties "c" and "d" with the types of number
    let recordedCdVar: RecordedCd = {
      c: 1,
      d: 1
    };
    ```

- `Omit`: opposite with `Pick` - omit specific properties from a type

  - For example, let's say we have an interface `IAbc` with properties `a`, `b`, and `c`. We can use the `Omit` utility type to create a new type `OmitAb` that excludes the property `b` from `IAbc`.

  ```ts
  interface IAbc {
    a: number;
    b: string;
    c: boolean;
  }

  type OmitAc = Omit<IAbc, 'b'>;
  let omitAcObject: OmitAc = {
    a: 1,
    c: true
  };

  console.log(omitAcObject);
  ```

  - This will create a new object `omitAbObject` with properties `a` and `c`, excluding the property `b` from `IAbc`.

- `readonly`, `const`

  - Example:

  ```ts
  const CEO = 'Jeff'; // strings are immutable

  const CeoObject = {
    // objects are not immutable
    name: 'Jeff',
    company: 'Amazon'
  };

  // CeoObject.name = 'Bill'

  // 1. Object.freeze
  // 2. as const

  function toUpperCaseNames(names: ReadonlyArray<string>) {
    // names.push('My Name')
    return names.map((name) => {
      return name.toUpperCase();
    });
  }

  type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum master';

  type Employee = {
    name: string;
    position: Position;
  };

  function paySalary(empl: Employee) {
    console.log(`The pay for ${empl.position} is 10000 `);
  }

  const john = {
    name: 'John',
    position: 'Programmer'
  } as const;

  paySalary(john);
  ```

  - `as const` or `Object.freeze()`: make object readonly

#### 4. Conditional types: [&#x21e7;](#session-4-20240523)

- Syntax
- Type constrains
- Conditional type chaining

#### 5. Session 4 practices &#10060;

### Session 5 20240525

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

  - [Practice `infer` keyword](./2-advanced-types/infer-keyword/infer-keyword-practice.ts)&#9989;

#### 2. Template literal types: [&#x21e7;](#session-5-20240525)

- Basics

  - Syntax:

    ```ts
    type FirstName = 'Albert';
    type LastName = 'Einstein';

    type Name = `${FirstName} ${LastName}`; // <- template literal ✨type✨!
    // => "Albert Einstein"

    type Index = 20;

    type Accessor = `users[${Index}].isAdmin`;
    // => "users[20].isAdmin"

    type EqualsTrue = `${Accessor} === ${true}`;
    // => "users[20].isAdmin === true"
    ```

  - That's something to keep in mind, as it's sometimes useful to `stringify` numbers to treat number literal types like `0` as equivalent to string literal types like `"0"`:

    ```ts
    type Obj = { '0': 100 };
    type Index = 0;

    type Get<Obj, Key extends keyof Obj> = Obj[Key];

    type A = Get<Obj, Index>; // ❌ `0` isn't assignable to `keyof Obj`
    type B = Get<Obj, `${Index}`>; // ✅ this works!
    ```

- Templates containing primitive types

  - Example:

    ```ts
    type FirstName = 'William';

    type William = `${FirstName} ${string}`; // `William ${string}`
    const name1: William = 'William Cao'; // ✅
    const name2: William = 'William King'; // ✅
    const name3: William = 'William '; // ✅ because "" is a string.
    const name4: William = "Who's there?"; // ❌
    const name5: William = 'Hello William'; // ❌
    ```

  - Template Literal Types sit right in between primitive types and string literals in our dear subtyping hierarchy:

  ```mermaid
    graph TD;
    subgraph string;
      subgraph get-string["(`get${string}`)"];
        get-user((getUsers));
        get-posts((getPosts));
      end
    end
  ```

  - But what's even cooler is that you can use them to create patterns containing `numbers` or `booleans` too.

    ```ts
    type Age = `I was born in ${number}.`;

    const age1: Age = 'I was born in 1993.'; // ✅
    const age2: Age = 'I was born in 3.141592.'; // ✅
    const age3: Age = 'I was born in a galaxy far, far away...'; // ❌
    // "a galaxy far, far away..." is not a number!

    function ping(localDomain: `localhost:${number}`): void;

    ping('localhost:3000'); // ✅
    ping('localhost:8080'); // ✅
    ping('localhost:three-thousand'); // ❌
    ```

- Templates and union types

  - What if we dropped a union type in a template? Let's find out:

    ```ts
    type Size = 'sm' | 'md' | 'lg';

    type ClassName = `size-${Size}`;
    // => "size-sm" | "size-md" | "size-lg"
    ```

  - Each item of this union is interpolated separately, and we get back **the union of their results**! Now, what if we try to interpolate **several union types** in the same template?

    ```ts
    type Variant = 'primary' | 'secondary';
    type Size = 'sm' | 'md' | 'lg';

    type ButtonStyle = `${Variant}-${Size}`;
    // => | "primary-sm"   | "primary-md"   | "primary-lg"
    //    | "secondary-sm" | "secondary-md" | "secondary-lg"
    ```

- Helper functions: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`

  - There's `Uppercase`, which turns every letter in the string into uppercase:

    ```ts
    type T1 = Uppercase<'hello'>;
    //   =>   "HELLO"
    ```

  - `Lowercase` performs the opposite transformation and turns every letter into lowercase:

    ```ts
    type T2 = Lowercase<'HELLO'>;
    //   =>   "hello"
    ```

  - `Capitalize` only puts the first letter of the string in uppercase:

    ```ts
    type T3 = Capitalize<'hello, world!'>;
    //   =>   "Hello, world!"
    ```

  - `Uncapitalize` puts the first letter of the string in lowercase:

    ```ts
    type T4 = Uncapitalize<'HelloWorld'>;
    //   =>   "helloWorld"
    ```

- Templates and object properties

  - Computing object properties is another area where Template Literal Types really shine. Let's say we have an HTTP service that should define a `GET` and `POST` method for all of our resources. We can compute the names of all the necessary fetch functions pretty easily:

  ```ts
  type Method = 'GET' | 'POST';

  type Resource = 'user' | 'blogPost';

  type PropName = `${Lowercase<Method>}${Capitalize<Resource>}`;
  // => "getUser" | "getBlogPost" | "postUser" | "postBlogPost"
  ```

  - Here, we generate the combinations of our `Methods` and `Resources`, and we use two of the helper functions we've just seen to format them as method names. To create an object type, the only thing left to do is to drop our `PropName` type in a `Record`:

  ```ts
  type HTTPService = Record<PropName, Function>;
  // => { getUser: Function; getBlogPost: Function; postUser: Function; ... }
  ```

#### 3. The Union type: [&#x21e7;](#session-5-20240525)

- The union type multiverse

  - Example: everything that can happen happens

    ```ts
    type TrafficLight = 'green' | 'orange' | 'red';

    const trafficLight: TrafficLight = 'green';
    type ShouldStop = { green: 'no'; orange: 'yes'; red: 'yes' };

    type T = ShouldStop['green' | 'orange' | 'red'];
    /*<=>*/ type T =
      | ShouldStop['green']
      | ShouldStop['orange']
      | ShouldStop['red'];
    /*<=>*/ type T = 'no' | 'yes' | 'yes';
    /*<=>*/ type T = 'no' | 'yes';
    ```

- The distributive natures of Union types (Tính giao hoán của các `Kiểu liên hợp`)

  ```ts
  type T1 = `x ${'a' | 'b' | 'c'}`;
  // <=>
  type T2 = `x ${'a'}` | `x ${'b'}` | `x ${'c'}`;
  ```

  - Template literal types distribute over union types. Our `|` behaves like a `+` and the template literal's `${...}` interpolation syntax behaves like a `*`.

    ```ts
    type T1 = User['name' | 'age'];
    // <=>
    type T2 = User['name'] | User['age'];
    ```

- Unions and Conditional types

  - Conditional types are the secret weapon of type-level programmers. They are the main building blocks of our smart type-inference logic. The most interesting things happen when combining them with other features of the type system, and union types are no exception.

    - This `IsString` generic returns `"yes"` if the input type is assignable to `string` and `"no"` otherwise:

    ```ts
    type IsString<T> = T extends string ? 'yes' : 'no';
    type T1 = IsString<'is this a string?'>; // "yes"

    type T2 = IsString<123>; // "no"
    ```

    - Now, what if we give a union type to `IsString`:

    ```ts
    type T = IsString<'a' | 2 | 'c'>; // yes? no? 🤔
    type T = IsString<'a' | 2 | 'c'>;
    //   =>  "yes" | "no"
    /* <=>*/ type T =
      | ('a' extends string ? 'yes' : 'no')
      | (2 extends string ? 'yes' : 'no')
      | ('c' extends string ? 'yes' : 'no');
    /* <=>*/ type T = 'yes' | 'no' | 'yes';
    /* <=>*/ type T = 'yes' | 'no';
    ```

#### 4. `Prettify` type helper: [&#x21e7;](#session-5-20240525)

- Helper type from TypeScript: show the actual type of a object in a cleaner way

  ```ts
  type Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};
  type Intersected = Prettify<
    {
      a: string;
    } & {
      b: number;
    } & {
      c: boolean;
    }
  >;
  // { a: string; b: number; c: boolean }
  ```

### Practical TypeScript
