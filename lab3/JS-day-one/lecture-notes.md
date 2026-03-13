# Day 1: Vanilla JavaScript Deep Dive (3 Hours)

## What is JavaScript?
JavaScript is a programming language that runs in web browsers, allowing you to make web pages interactive. It was created by Brendan Eich in 1995 in just 10 days at Netscape. Despite its name, JavaScript has nothing to do with Java—it was named that way for marketing reasons.

### Key Characteristics:
- **Interpreted language**: Code runs line by line without needing compilation.
- **Dynamic typing**: Variables don't have fixed types; they can change.
- **Client-side**: Originally runs in the browser (later Node.js enabled server-side JS).
- **Case-sensitive**: `myVariable` and `myvariable` are different.

## Setting Up Your Development Environment

### Browser Console (Primary Tool)
1. Open your browser (Chrome, Firefox, Safari, or Edge).
2. Right-click anywhere on a webpage → "Inspect" or "Inspect Element".
3. Click the "Console" tab.
4. You can now type JavaScript code directly and see results immediately.

**Try it:**
```js
console.log("Hello, World!");
```

### Basic Console Methods
- `console.log()` - Print output (most common).
- `console.error()` - Print error messages in red.
- `console.warn()` - Print warnings in yellow.
- `console.clear()` - Clear the console.

### Getting User Input (Browser Only)
```js
var name = prompt("What is your name?");
alert("Hello, " + name + "!");
```

## Basic Syntax and Structure

### Statements and Semicolons
- Each instruction in JavaScript is called a **statement**.
- Statements should end with a semicolon (`;`).
- Curly braces `{}` group multiple statements into a block.

```js
var x = 10;          // Statement 1
var y = 20;          // Statement 2
var sum = x + y;     // Statement 3
console.log(sum);    // Statement 4
```

### Comments
```js
// This is a single-line comment

/* This is a
   multi-line comment */

var age = 25;  // You can also put comments at the end of a line
```

### Strict Mode (Optional but Recommended)
```js
"use strict";
// This makes JavaScript more strict and helps catch errors early
x = 10;  // Error! Must declare variable with 'var' first
```

## Variables and Data Types

### Declaring Variables
In vanilla JavaScript, we use `var` to declare variables:

```js
var name;           // Declare a variable
name = "John";      // Assign a value
var age = 25;       // Declare and assign in one line
```

**Variable Naming Rules:**
- Must start with a letter, underscore (_), or dollar sign ($).
- Can contain letters, numbers, underscores, or dollar signs.
- Cannot use reserved keywords (var, if, for, function, etc.).
- Case-sensitive: `userName` ≠ `username`.

### Data Types (Primitives)
JavaScript has 5 main primitive data types:

1. **Number** - For numeric values (integers and decimals)
```js
var age = 25;
var price = 19.99;
var negative = -50;
```

2. **String** - For text, enclosed in quotes
```js
var name = "John";
var greeting = 'Hello';
var mixed = "It's a nice day";  // Use double quotes when text contains single quote
```

3. **Boolean** - true or false
```js
var isStudent = true;
var hasLicense = false;
```

4. **Undefined** - Variable declared but not assigned
```js
var x;
console.log(x);  // undefined
```

5. **Null** - Intentionally empty value
```js
var emptyValue = null;
```

### Checking Types
```js
var x = 10;
console.log(typeof x);  // "number"

var name = "John";
console.log(typeof name);  // "string"

var flag = true;
console.log(typeof flag);  // "boolean"
```

### Literal vs Constructor Creation

**Literals (Recommended):**
```js
var name = "John";           // String literal
var age = 25;                // Number literal
var isActive = true;         // Boolean literal
var colors = ["red", "blue"]; // Array literal
var person = {name: "John"}; // Object literal
```

**Constructors (Avoid for primitives):**
```js
var name = new String("John");     // Creates an object, not a primitive
var age = new Number(25);          // Creates an object, not a primitive
var flag = new Boolean(true);      // Creates an object, not a primitive
```

**Why prefer literals?** They're simpler, faster, and less confusing.

## Type Conversion

### Implicit Type Conversion (Coercion)
JavaScript automatically converts types in certain situations:

```js
var result = "5" + 2;      // "52" (number 2 becomes string "2")
var result2 = "5" - 2;     // 3 (string "5" becomes number 5)
var result3 = "5" * "2";   // 10 (both strings become numbers)
var result4 = "hello" - 2; // NaN (Not a Number - can't convert "hello" to number)
```

**Important Rules:**
- **Addition (+)** with strings performs concatenation.
- **Other operators (-, *, /, %)** try to convert to numbers.

### Explicit Type Conversion
You manually convert types:

**To String:**
```js
var num = 123;
var str = String(num);        // "123"
var str2 = num.toString();    // "123"
var str3 = num + "";          // "123" (quick trick using coercion)
```

**To Number:**
```js
var str = "456";
var num = Number(str);        // 456
var num2 = parseInt(str);     // 456 (for integers)
var num3 = parseFloat("3.14"); // 3.14 (for decimals)
var num4 = +"123";            // 123 (quick trick using unary plus)
```

**To Boolean:**
```js
var x = Boolean(1);           // true
var y = Boolean(0);           // false
var z = Boolean("hello");     // true
var w = Boolean("");          // false
```

### Falsy Values
These values are treated as `false` in boolean contexts:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy** (treated as `true`).

```js
if (0) {
  console.log("Won't print");  // 0 is falsy
}

if ("hello") {
  console.log("Will print");   // Non-empty string is truthy
}
```

## Basic Operators

### Arithmetic Operators
```js
var a = 10;
var b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7  (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1  (Modulus/Remainder)
```

**Special Cases:**
```js
var x = 10 / 0;       // Infinity
var y = 0 / 0;        // NaN (Not a Number)
var z = 10 % 3;       // 1 (remainder of 10 divided by 3)
```

### Assignment Operators
```js
var x = 10;       // Basic assignment

x = x + 5;        // Add 5 to x
x += 5;           // Shorthand for above (compound assignment)

x -= 3;           // x = x - 3
x *= 2;           // x = x * 2
x /= 4;           // x = x / 4
x %= 3;           // x = x % 3
```

### Increment and Decrement
```js
var count = 5;

count++;          // Post-increment: count = count + 1 (now 6)
count--;          // Post-decrement: count = count - 1 (now 5)

++count;          // Pre-increment (now 6)
--count;          // Pre-decrement (now 5)
```

**Difference:**
```js
var x = 5;
var y = x++;      // y = 5, x = 6 (assigns first, then increments)

var a = 5;
var b = ++a;      // b = 6, a = 6 (increments first, then assigns)
```

### Comparison Operators
```js
var a = 10;
var b = 20;

console.log(a == b);   // false (equal value)
console.log(a != b);   // true  (not equal value)
console.log(a === b);  // false (equal value AND type)
console.log(a !== b);  // true  (not equal value OR type)
console.log(a < b);    // true  (less than)
console.log(a > b);    // false (greater than)
console.log(a <= b);   // true  (less than or equal)
console.log(a >= b);   // false (greater than or equal)
```

**== vs ===**
```js
var x = 5;
var y = "5";

console.log(x == y);   // true  (converts "5" to 5, then compares)
console.log(x === y);  // false (different types: number vs string)
```

**Best Practice:** Always use `===` and `!==` to avoid unexpected type conversions.

### Logical Operators
```js
var x = true;
var y = false;

console.log(x && y);  // false (AND - both must be true)
console.log(x || y);  // true  (OR - at least one must be true)
console.log(!x);      // false (NOT - inverts the value)
```

**Short-Circuit Evaluation:**
```js
var result = true || expensiveFunction();  // expensiveFunction() won't run
var result2 = false && expensiveFunction(); // expensiveFunction() won't run
```

**Practical Use:**
```js
var userName = userInput || "Guest";  // If userInput is empty, use "Guest"
```

### Operator Precedence
```js
var result = 10 + 5 * 2;     // 20 (multiplication before addition)
var result2 = (10 + 5) * 2;  // 30 (parentheses force order)
```

**Order (high to low):**
1. Parentheses `()`
2. Unary operators `++`, `--`, `!`
3. Multiplication, Division, Modulus `*`, `/`, `%`
4. Addition, Subtraction `+`, `-`
5. Comparison `<`, `>`, `<=`, `>=`
6. Equality `==`, `===`, `!=`, `!==`
7. Logical AND `&&`
8. Logical OR `||`
9. Assignment `=`, `+=`, `-=`, etc.

## Control Flow (if Statements)

### Basic if Statement
```js
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

### if-else Statement
```js
var temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else {
  console.log("It's pleasant.");
}
```

### if-else if-else Statement
```js
var score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

### Nested if Statements
```js
var age = 20;
var hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  } else {
    console.log("You need a license.");
  }
} else {
  console.log("You're too young to drive.");
}
```

### Ternary Operator (Conditional Operator)
Short form for simple if-else:

```js
var age = 20;
var status = (age >= 18) ? "adult" : "minor";
console.log(status);  // "adult"

// Equivalent to:
var status;
if (age >= 18) {
  status = "adult";
} else {
  status = "minor";
}
```

## Switch Statements

Use `switch` when you have multiple specific values to check:

```js
var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  // "Wednesday"
```

### Important: The `break` Statement
Without `break`, execution "falls through" to the next case:

```js
var grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    // Missing break - falls through!
  case "C":
    console.log("You passed.");
    break;
  default:
    console.log("Keep trying.");
}
// Output: "Good job!" AND "You passed."
```

### Multiple Cases for Same Code
```js
var day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day.");
}
```

## Loops

### for Loop
Best when you know how many times to repeat:

```js
for (var i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4
```

**Parts of a for loop:**
1. **Initialization**: `var i = 0` (runs once at start)
2. **Condition**: `i < 5` (checked before each iteration)
3. **Increment**: `i++` (runs after each iteration)

**Looping Through an Array:**
```js
var fruits = ["apple", "banana", "cherry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Counting Backwards:**
```js
for (var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Blast off!");
```

### while Loop
Best when you don't know how many times to repeat:

```js
var count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++;
}
```

**Common Pattern: User Input**
```js
var password = "";

while (password !== "secret") {
  password = prompt("Enter password:");
}

console.log("Access granted!");
```

**Warning: Infinite Loops**
```js
// BAD - Never ends!
var x = 0;
while (x < 5) {
  console.log(x);
  // Forgot to increment x!
}
```

### do-while Loop
Runs at least once, then checks condition:

```js
var count = 0;

do {
  console.log("Count: " + count);
  count++;
} while (count < 5);
```

**Difference from while:**
```js
// while loop - might not run at all
var x = 10;
while (x < 5) {
  console.log("Won't print");  // Condition is false from start
}

// do-while loop - always runs once
var y = 10;
do {
  console.log("Prints once");  // Runs before checking condition
} while (y < 5);
```

## break and continue Statements

### break Statement
Exits the loop immediately:

```js
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Exit loop when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**Finding First Match:**
```js
var numbers = [3, 7, 12, 18, 25];
var found = false;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 15) {
    console.log("First number greater than 15: " + numbers[i]);
    found = true;
    break;  // Stop searching
  }
}
```

### continue Statement
Skips the current iteration and moves to the next:

```js
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9 (only odd numbers)
```

**Filtering Invalid Data:**
```js
var scores = [85, -1, 92, 0, 78, -5, 88];

for (var i = 0; i < scores.length; i++) {
  if (scores[i] < 0) {
    continue;  // Skip invalid scores
  }
  console.log("Valid score: " + scores[i]);
}
```

### Nested Loops
```js
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}
```

**Multiplication Table:**
```js
for (var i = 1; i <= 5; i++) {
  var row = "";
  for (var j = 1; j <= 5; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}
```

## Practical Patterns and Examples

### Example 1: Grade Calculator
```js
var score = parseInt(prompt("Enter your score (0-100):"));

if (score < 0 || score > 100) {
  console.log("Invalid score!");
} else if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Good job!");
} else if (score >= 70) {
  console.log("Grade: C - You passed.");
} else if (score >= 60) {
  console.log("Grade: D - Need improvement.");
} else {
  console.log("Grade: F - Failed.");
}
```

### Example 2: Sum of Numbers
```js
var sum = 0;

for (var i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum of 1 to 100: " + sum);  // 5050
```

### Example 3: Factorial
```js
var number = 5;
var factorial = 1;

for (var i = 1; i <= number; i++) {
  factorial *= i;
}

console.log("Factorial of " + number + ": " + factorial);  // 120
```

### Example 4: FizzBuzz
```js
for (var i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

### Example 5: Finding Prime Numbers
```js
var num = 17;
var isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(num + " is " + (isPrime ? "prime" : "not prime"));
```

## Lab Exercises (30-40 minutes)

### Exercise 1: Simple Calculator
Create a calculator that:
- Prompts for two numbers.
- Prompts for an operation (+, -, *, /).
- Uses a switch statement to perform the operation.
- Displays the result.

### Exercise 2: Number Guessing Game
- Generate a random number between 1-10. (hint: search for Math.floor and Math.random)
- Use a while loop to let the user guess.
- Tell them if their guess is too high or too low.
- Count the number of attempts.

### Exercise 3: Array Processing
Given an array of mixed numbers:
```js
var numbers = [12, -5, 8, 0, -3, 15, 22, -8, 6];
```
- Loop through and separate positive and negative numbers into two arrays.
- Calculate and print the sum of positive numbers.
- Count how many negative numbers there are.

### Exercise 4: Multiplication Table
- Use nested loops to create a 10x10 multiplication table.
- Format the output so it's readable.

### Exercise 5 (BONUS): Pattern Printing
Use loops to print this pattern:
```
*
**
***
****
*****
```
then for this pattern:

```
    *
   ***
  *****
 *******
*********

```