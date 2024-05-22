/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
What will the following function invocation result in? 
*/

function courseName(): string {
  return 'TS';
}
let typeScript: 'TS' = courseName(); // Type string is not assignable to type 'TS's

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
What will accessing the variable favBook result be?
*/

type BookType =
  | 'And the Mountains Echoed'
  | 'The Kite Runner'
  | 'A Thousand Splendid Suns';
let favBook: BookType = 'The Kite Runner';
favBook; // 'The Kite Runner'

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
What will the following code result in?
*/

type BookType =
  | 'And the Mountains Echoed'
  | 'The Kite Runner'
  | 'A Thousand Splendid Suns';
let favBook: BookType = 'The Shining';
favBook; // cannot assign 'The Shining' to BookType

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
What will the following variable assignment result in?
*/

let bool: true = false; // cannot assign false to true

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
