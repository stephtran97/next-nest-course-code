# Module 1: TypeScript

## Reference:

- Book: `Effective TypeScript`

## Libraries

- `ts-node`: Library for compile + run file .ts

## Table of Content

- Session 1 20240511:
  - Types system:
    - JavaScript types: `number`, `string`, `boolean`, `null`, `undefined`, `void`, `object`, `array`, `function`
    - TypeScript types: `any`, `never`, `unknown`, `tuple`, `enum`, others(type alias)
    - supertype and subtype
  - Type annotation
  - Primitive types:
  - Type inference
  - Duck typing
  - `any` type
  - `unknown` type
  - `unknown` vs `any`
  - `never`
  - Compound types - Function types:
    - Function params type
    - Function return type
    - Function signatures
    - Anonymous function
    - `void`
    - `never`
- Session 2 20240516:
  - Compound types - Object types:
    - Syntax
    - Excess property checking
    - Type alias
    - Nested object
    - Supertype and subtype of object
    - Reading properties
    - Reading several properties at once
  - Array types
  - Union types
  - Literal types
  - Tuples
  - Variadic Tuple (using `...` operator)
  - Enum: Reading `Don't use Enum in TypeScript`
  - Interface
  - Type and interface
- Session 3 20240518:
  - Types narrowing (types guards):
    - `typeof` guards
    - Truthiness guards
    - Equality narrowing
    - `in` operator narrowing
    - `instanceof` narrowing
    - Type predicates (using `is` operator)
    - Discriminated unions
  - Type assertion
  - Generic types:
    - Generic syntax,
    - Constraining generic types
    - Multiple generic types
