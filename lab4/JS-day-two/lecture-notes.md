
## Functions

Functions are reusable blocks of code that perform specific tasks. They're one of the fundamental building blocks of JavaScript.

### Why Use Functions?
- **Reusability**: Write code once, use it many times.
- **Organization**: Break complex problems into smaller pieces.
- **Maintainability**: Update code in one place instead of many.
- **Abstraction**: Hide implementation details.

### Function Declaration (Traditional Way)

```js
function greet() {
  console.log("Hello, World!");
}

greet();  // Call the function - Output: "Hello, World!"
```

**Syntax:**
```js
function functionName() {
  // Code to execute
}
```

### Parameters and Arguments

**Parameters** are variables listed in the function declaration. **Arguments** are the actual values passed when calling the function.

```js
function greet(name) {  // 'name' is a parameter
  console.log("Hello, " + name + "!");
}

greet("Alice");  // "Alice" is an argument - Output: "Hello, Alice!"
greet("Bob");    // Output: "Hello, Bob!"
```

**Multiple Parameters:**
```js
function add(a, b) {
  console.log(a + b);
}

add(5, 3);     // 8
add(10, 20);   // 30
```

**Default Behavior:**
```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet();  // "Hello, undefined!" - Missing argument becomes undefined
```

**Handling Missing Arguments (ES5 Way):**
```js
function greet(name) {
  name = name || "Guest";  // Use "Guest" if name is falsy
  console.log("Hello, " + name + "!");
}

greet();         // "Hello, Guest!"
greet("Alice");  // "Hello, Alice!"
```

**More Robust Default Values:**
```js
function calculatePrice(price, tax) {
  // Check for undefined specifically (to allow 0 as valid value)
  if (tax === undefined) {
    tax = 0.1;  // Default 10% tax
  }
  return price + (price * tax);
}

console.log(calculatePrice(100));      // 110
console.log(calculatePrice(100, 0));   // 100 (0% tax is valid)
console.log(calculatePrice(100, 0.2)); // 120
```

### Return Values

Functions can send values back using the `return` statement:

```js
function add(a, b) {
  return a + b;
}

var sum = add(5, 3);
console.log(sum);  // 8
```

**Important Rules:**
- `return` stops function execution immediately.
- Code after `return` won't run.
- Without `return`, functions return `undefined`.

```js
function example() {
  return "First";
  console.log("This never runs");
  return "Second";  // This never runs either
}

console.log(example());  // "First"
```

**No Return Statement:**
```js
function sayHello() {
  console.log("Hello!");
  // No return statement
}

var result = sayHello();  // Prints "Hello!"
console.log(result);      // undefined
```

**Early Return (Guard Clauses):**
```js
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // "Error: Cannot divide by zero"
```

**Returning Multiple Values (Using Object/Array):**
```js
function getMinMax(numbers) {
  var min = numbers[0];
  var max = numbers[0];
  
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }
  
  return {min: min, max: max};  // Return object
}

var result = getMinMax([3, 7, 2, 9, 1]);
console.log(result.min);  // 1
console.log(result.max);  // 9
```

### Function Scope

Variables declared inside a function are **local** to that function. They can't be accessed from outside.

```js
function myFunction() {
  var localVar = "I'm local";
  console.log(localVar);  // Works
}

myFunction();
console.log(localVar);  // Error: localVar is not defined
```

**Global vs Local Scope:**
```js
var globalVar = "I'm global";  // Global scope

function test() {
  var localVar = "I'm local";  // Local scope
  console.log(globalVar);      // Can access global - "I'm global"
  console.log(localVar);       // Can access local - "I'm local"
}

test();
console.log(globalVar);  // "I'm global"
console.log(localVar);   // Error: localVar is not defined
```

**Shadowing (Variable Name Collision):**
```js
var name = "Global";

function test() {
  var name = "Local";  // Shadows the global variable
  console.log(name);   // "Local" - uses local version
}

test();
console.log(name);  // "Global" - global unchanged
```

**Variables Without var (Implicit Globals - BAD!):**
```js
function badPractice() {
  x = 10;  // No 'var' - creates global variable!
}

badPractice();
console.log(x);  // 10 - Accessible globally (dangerous!)
```

**Best Practice:** Always use `var` to declare variables, or use strict mode:
```js
"use strict";

function goodPractice() {
  y = 10;  // Error in strict mode: y is not defined
}
```

**Nested Functions:**
```js
function outer() {
  var outerVar = "Outer";
  
  function inner() {
    var innerVar = "Inner";
    console.log(outerVar);  // Can access outer's variables
    console.log(innerVar);
  }
  
  inner();
  console.log(outerVar);  // Can access own variables
  console.log(innerVar);  // Error: innerVar is not defined
}

outer();
```

### Hoisting

JavaScript "hoists" function declarations to the top of their scope. This means you can call a function before it's declared in your code:

```js
greet();  // Works! Output: "Hello!"

function greet() {
  console.log("Hello!");
}
```

**Behind the scenes, JavaScript sees:**
```js
function greet() {
  console.log("Hello!");
}

greet();
```

**Variable Hoisting:**
Variables declared with `var` are also hoisted, but only the declaration, not the assignment:

```js
console.log(x);  // undefined (not an error!)
var x = 10;
console.log(x);  // 10
```

**Behind the scenes:**
```js
var x;           // Declaration hoisted
console.log(x);  // undefined
x = 10;          // Assignment stays in place
console.log(x);  // 10
```

**Function Expressions (Not Hoisted the Same Way):**
```js
greet();  // Error: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

**Behind the scenes:**
```js
var greet;       // Declaration hoisted
greet();         // greet is undefined, not a function yet!
greet = function() {
  console.log("Hello!");
};
```

**Best Practice:** Declare all variables and functions at the top of their scope to avoid confusion:
```js
function myFunction() {
  var a, b, c;  // Declare all variables at top
  
  a = 10;
  b = 20;
  c = a + b;
  
  return c;
}
```

### Function Expression vs Function Declaration

**Function Declaration:**
```js
function add(a, b) {
  return a + b;
}
```
- Hoisted completely.
- Can be called before declaration.
- Must have a name.

**Function Expression:**
```js
var add = function(a, b) {
  return a + b;
};
```
- Not hoisted (only the variable is).
- Can't be called before assignment.
- Can be anonymous (no name).

**Named Function Expression:**
```js
var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);  // Can call itself by name
};

console.log(factorial(5));  // 120
```

### Functions as Values

Functions are "first-class citizens" in JavaScript - they can be:
- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.

**Passing Functions as Arguments:**
```js
function executeOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(executeOperation(5, 3, add));       // 8
console.log(executeOperation(5, 3, multiply));  // 15
```

**Returning Functions:**
```js
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var double = createMultiplier(2);
var triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Arrays

Arrays are ordered collections that can hold multiple values. They're one of the most commonly used data structures.

### Creating Arrays

**Array Literal (Recommended):**
```js
var fruits = ["apple", "banana", "cherry"];
var numbers = [1, 2, 3, 4, 5];
var mixed = [1, "hello", true, null];  // Can mix types
var empty = [];
```

**Array Constructor (Less Common):**
```js
var arr1 = new Array();           // Empty array
var arr2 = new Array(3);          // Array with 3 empty slots
var arr3 = new Array(1, 2, 3);    // [1, 2, 3]
```

**Pitfall with Array Constructor:**
```js
var a = new Array(3);      // [empty × 3] - 3 empty slots
var b = new Array(3, 4);   // [3, 4] - 2 elements

// Use literals to avoid confusion:
var c = [3];     // [3] - 1 element
var d = [3, 4];  // [3, 4] - 2 elements
```

### Accessing and Updating Elements

Arrays are **zero-indexed** (first element is at index 0):

```js
var fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "cherry"
console.log(fruits[3]);  // undefined (doesn't exist)
```

**Updating Elements:**
```js
var fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits);  // ["apple", "blueberry", "cherry"]
```

**Adding Elements at Specific Index:**
```js
var arr = [1, 2, 3];
arr[5] = 6;
console.log(arr);  // [1, 2, 3, empty × 2, 6]
console.log(arr[4]);  // undefined
```

### Array Length

The `length` property tells you how many elements are in an array:

```js
var fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);  // 3
```

**Using length in loops:**
```js
var fruits = ["apple", "banana", "cherry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Modifying length:**
```js
var arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);  // [1, 2, 3] - truncated!

arr.length = 5;
console.log(arr);  // [1, 2, 3, empty × 2] - added empty slots
```

### Common Array Methods

#### push() - Add to End
```js
var fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits);  // ["apple", "banana", "cherry"]

// Can push multiple items
fruits.push("date", "elderberry");
console.log(fruits);  // ["apple", "banana", "cherry", "date", "elderberry"]

// Returns new length
var newLength = fruits.push("fig");
console.log(newLength);  // 6
```

#### pop() - Remove from End
```js
var fruits = ["apple", "banana", "cherry"];
var last = fruits.pop();
console.log(last);    // "cherry" (returned value)
console.log(fruits);  // ["apple", "banana"]
```

#### unshift() - Add to Beginning
```js
var fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits);  // ["apple", "banana", "cherry"]

// Can add multiple items
fruits.unshift("a", "b");
console.log(fruits);  // ["a", "b", "apple", "banana", "cherry"]
```

#### shift() - Remove from Beginning
```js
var fruits = ["apple", "banana", "cherry"];
var first = fruits.shift();
console.log(first);   // "apple" (returned value)
console.log(fruits);  // ["banana", "cherry"]
```

**Summary of Stack/Queue Operations:**
```js
var arr = [];

// Stack (LIFO - Last In, First Out)
arr.push(1);     // Add to end
arr.push(2);
arr.pop();       // Remove from end

// Queue (FIFO - First In, First Out)
arr.push(1);     // Add to end
arr.push(2);
arr.shift();     // Remove from beginning
```

#### splice() - Add/Remove Elements Anywhere
```js
// splice(startIndex, deleteCount, itemsToAdd...)

var fruits = ["apple", "banana", "cherry", "date"];

// Remove 2 elements starting at index 1
var removed = fruits.splice(1, 2);
console.log(removed);  // ["banana", "cherry"]
console.log(fruits);   // ["apple", "date"]

// Add elements without removing
fruits.splice(1, 0, "blueberry", "cranberry");
console.log(fruits);  // ["apple", "blueberry", "cranberry", "date"]

// Replace elements
fruits.splice(1, 2, "banana");
console.log(fruits);  // ["apple", "banana", "date"]
```

#### slice() - Extract Portion (Doesn't Modify Original)
```js
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// slice(startIndex, endIndex) - endIndex is exclusive
var citrus = fruits.slice(1, 3);
console.log(citrus);  // ["banana", "cherry"]
console.log(fruits);  // Original unchanged

// From index to end
var last2 = fruits.slice(-2);
console.log(last2);  // ["date", "elderberry"]

// Copy entire array
var copy = fruits.slice();
```

#### concat() - Combine Arrays
```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr1.concat(arr2);
console.log(combined);  // [1, 2, 3, 4, 5, 6]
console.log(arr1);      // [1, 2, 3] - unchanged

// Can concat multiple arrays
var arr3 = [7, 8];
var all = arr1.concat(arr2, arr3);
console.log(all);  // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### join() - Convert to String
```js
var fruits = ["apple", "banana", "cherry"];
var str = fruits.join(", ");
console.log(str);  // "apple, banana, cherry"

var dashed = fruits.join(" - ");
console.log(dashed);  // "apple - banana - cherry"

var noSeparator = fruits.join("");
console.log(noSeparator);  // "applebananacherry"
```

#### indexOf() - Find Element Position
```js
var fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana"));  // 1 (first occurrence)
console.log(fruits.indexOf("date"));    // -1 (not found)

// Start searching from index
console.log(fruits.indexOf("banana", 2));  // 3 (finds second "banana")
```

#### reverse() - Reverse Array (Modifies Original!)
```js
var numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]
```

#### sort() - Sort Array (Modifies Original!)
```js
var fruits = ["cherry", "apple", "banana"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "cherry"]

// Numbers need custom comparison!
var numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort();
console.log(numbers);  // [1, 10, 1000, 25, 40, 5] - WRONG! Sorted as strings

// Correct way for numbers:
numbers.sort(function(a, b) {
  return a - b;  // Ascending order
});
console.log(numbers);  // [1, 5, 10, 25, 40, 1000]

// Descending order:
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);  // [1000, 40, 25, 10, 5, 1]
```

### Multidimensional Arrays

Arrays can contain other arrays:

```js
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0]);     // [1, 2, 3]
console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6
console.log(matrix[2][1]);  // 8
```

**Looping Through 2D Array:**
```js
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    console.log("matrix[" + i + "][" + j + "] = " + matrix[i][j]);
  }
}
```

## Objects

Objects are collections of key-value pairs. They're used to represent real-world entities with properties and behaviors.

### Object Literals

The most common way to create objects:

```js
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

**Syntax:**
```js
var objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};
```

**Various Value Types:**
```js
var person = {
  name: "Alice",              // String
  age: 25,                    // Number
  isStudent: true,            // Boolean
  hobbies: ["reading", "coding"],  // Array
  address: {                  // Nested object
    street: "123 Main St",
    city: "Boston"
  }
};
```

### Properties and Methods

**Properties** are values associated with an object. **Methods** are functions associated with an object.

```js
var car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  
  // Method
  start: function() {
    console.log("Engine started!");
  },
  
  // Method with parameters
  drive: function(speed) {
    console.log("Driving at " + speed + " mph");
  }
};

// Access properties
console.log(car.brand);  // "Toyota"

// Call methods
car.start();      // "Engine started!"
car.drive(60);    // "Driving at 60 mph"
```

**Using `this` in Methods:**
```js
var person = {
  firstName: "John",
  lastName: "Doe",
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  
  greet: function() {
    console.log("Hello, I'm " + this.firstName);
  }
};

console.log(person.fullName());  // "John Doe"
person.greet();                  // "Hello, I'm John"
```

### Dot Notation vs Bracket Notation

**Dot Notation (Most Common):**
```js
var person = {name: "John", age: 30};

console.log(person.name);  // "John"
person.age = 31;
console.log(person.age);   // 31
```

**Bracket Notation:**
```js
var person = {name: "John", age: 30};

console.log(person["name"]);  // "John"
person["age"] = 31;
console.log(person["age"]);   // 31
```

**When to Use Bracket Notation:**

1. **Property names with spaces or special characters:**
```js
var obj = {
  "first name": "John",
  "user-email": "john@example.com"
};

console.log(obj["first name"]);   // "John"
// obj.first name  // Syntax error!
```

2. **Property names in variables:**
```js
var person = {name: "John", age: 30, city: "NYC"};
var prop = "age";

console.log(person[prop]);  // 30
// console.log(person.prop);  // undefined (looks for property named "prop")
```

3. **Dynamic property access:**
```js
var person = {name: "John", age: 30, city: "NYC"};

function getProperty(obj, propName) {
  return obj[propName];
}

console.log(getProperty(person, "name"));  // "John"
console.log(getProperty(person, "age"));   // 30
```

4. **Property names that are numbers:**
```js
var obj = {
  1: "one",
  2: "two"
};

console.log(obj[1]);   // "one"
console.log(obj["1"]); // "one"
// console.log(obj.1);  // Syntax error!
```

### Adding, Updating, and Deleting Properties

**Adding Properties:**
```js
var person = {name: "John"};

person.age = 30;
person["city"] = "NYC";

console.log(person);  // {name: "John", age: 30, city: "NYC"}
```

**Updating Properties:**
```js
var person = {name: "John", age: 30};

person.age = 31;
person["name"] = "Jane";

console.log(person);  // {name: "Jane", age: 31}
```

**Deleting Properties:**
```js
var person = {name: "John", age: 30, city: "NYC"};

delete person.age;
console.log(person);  // {name: "John", city: "NYC"}
console.log(person.age);  // undefined
```

**Checking if Property Exists:**
```js
var person = {name: "John", age: 30};

console.log("name" in person);    // true
console.log("email" in person);   // false

// Alternative method:
console.log(person.hasOwnProperty("name"));   // true
console.log(person.hasOwnProperty("email"));  // false
```

### Object Constructor

```js
var person = new Object();
person.name = "John";
person.age = 30;

console.log(person);  // {name: "John", age: 30}
```

**Constructor Functions (Creating Object Types):**
```js
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  
  this.greet = function() {
    console.log("Hello, I'm " + this.name);
  };
}

var person1 = new Person("John", 30, "NYC");
var person2 = new Person("Jane", 25, "LA");

person1.greet();  // "Hello, I'm John"
person2.greet();  // "Hello, I'm Jane"

console.log(person1.name);  // "John"
console.log(person2.age);   // 25



**for...in loop (For Objects):**
```js
var person = {
  name: "John",
  age: 30,
  city: "NYC"
};

for (var key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: NYC
```

**Important:** `for...in` gives you the **keys** (property names), not the values directly. Use bracket notation to get values.

**Checking Own Properties (Avoiding Inherited Properties):**
```js
var person = {
  name: "John",
  age: 30
};

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}
```

**Building Arrays from Objects:**
```js
var person = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Get all keys
var keys = [];
for (var key in person) {
  keys.push(key);
}
console.log(keys);  // ["name", "age", "city"]

// Get all values
var values = [];
for (var key in person) {
  values.push(person[key]);
}
console.log(values);  // ["John", 30, "NYC"]
```

**Counting Properties:**
```js
var person = {name: "John", age: 30, city: "NYC"};
var count = 0;

for (var key in person) {
  count++;
}

console.log("Number of properties: " + count);  // 3
```
## Built-in Objects

JavaScript provides several built-in objects with useful methods.

### Math Object

The `Math` object provides mathematical constants and functions. You don't create instances of Math - use it directly.

**Common Constants:**
```js
console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045
```

**Rounding Methods:**
```js
var num = 4.7;

console.log(Math.round(num));  // 5 (rounds to nearest integer)
console.log(Math.floor(num));  // 4 (rounds down)
console.log(Math.ceil(num));   // 5 (rounds up)

var negative = -4.7;
console.log(Math.floor(negative));  // -5 (rounds down = more negative)
console.log(Math.ceil(negative));   // -4 (rounds up = less negative)
```

**Absolute Value:**
```js
console.log(Math.abs(-5));    // 5
console.log(Math.abs(5));     // 5
console.log(Math.abs(-3.14)); // 3.14
```

**Min and Max:**
```js
console.log(Math.min(5, 3, 9, 1, 7));  // 1
console.log(Math.max(5, 3, 9, 1, 7));  // 9

// Finding min/max in array
var numbers = [5, 3, 9, 1, 7];
var min = Math.min.apply(null, numbers);
var max = Math.max.apply(null, numbers);
console.log(min);  // 1
console.log(max);  // 9
```

**Power and Square Root:**
```js
console.log(Math.pow(2, 3));   // 8 (2 to the power of 3)
console.log(Math.pow(5, 2));   // 25
console.log(Math.sqrt(25));    // 5
console.log(Math.sqrt(2));     // 1.4142135623730951
```

**Random Numbers:**
```js
// Random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());  // e.g., 0.7392...

// Random integer between 0 and 9
var rand0to9 = Math.floor(Math.random() * 10);

// Random integer between 1 and 10
var rand1to10 = Math.floor(Math.random() * 10) + 1;

// Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6));  // Dice roll (1-6)
console.log(randomInt(10, 20)); // Random between 10-20
```

**Trigonometric Functions:**
```js
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1 (approximately)
```

**Other Useful Methods:**
```js
console.log(Math.exp(1));      // 2.718... (e^1)
console.log(Math.log(10));     // 2.302... (natural log)
console.log(Math.log10(100));  // 2 (log base 10) - ES6+
```

### Date Object

The `Date` object works with dates and times. Unlike Math, you create Date instances.

**Creating Dates:**
```js
// Current date and time
var now = new Date();
console.log(now);

// Specific date (Month is 0-indexed! 0=Jan, 11=Dec)
var date1 = new Date(2024, 0, 15);  // January 15, 2024
var date2 = new Date(2024, 11, 25); // December 25, 2024

// With time (year, month, day, hour, minute, second, millisecond)
var date3 = new Date(2024, 0, 15, 14, 30, 0);  // Jan 15, 2024, 2:30 PM

// From string
var date4 = new Date("2024-01-15");
var date5 = new Date("January 15, 2024");

// From timestamp (milliseconds since Jan 1, 1970)
var date6 = new Date(1705276800000);
```

**Getting Date Components:**
```js
var date = new Date(2024, 0, 15, 14, 30, 45);

console.log(date.getFullYear());   // 2024
console.log(date.getMonth());      // 0 (January - remember 0-indexed!)
console.log(date.getDate());       // 15 (day of month)
console.log(date.getDay());        // 1 (Monday - 0=Sunday, 6=Saturday)

console.log(date.getHours());      // 14 (2 PM in 24-hour format)
console.log(date.getMinutes());    // 30
console.log(date.getSeconds());    // 45
console.log(date.getMilliseconds()); // 0
```

**Setting Date Components:**
```js
var date = new Date();

date.setFullYear(2025);
date.setMonth(5);      // June (0-indexed)
date.setDate(15);
date.setHours(10);
date.setMinutes(30);

console.log(date);
```

**Timestamp:**
```js
var date = new Date();

// Get timestamp (milliseconds since Jan 1, 1970 UTC)
var timestamp = date.getTime();
console.log(timestamp);

// Current timestamp (shortcut)
var now = Date.now();
console.log(now);
```

**Formatting Dates:**
```js
var date = new Date(2024, 0, 15, 14, 30);

console.log(date.toString());
// "Mon Jan 15 2024 14:30:00 GMT-0500 (Eastern Standard Time)"

console.log(date.toDateString());
// "Mon Jan 15 2024"

console.log(date.toTimeString());
// "14:30:00 GMT-0500 (Eastern Standard Time)"

console.log(date.toLocaleDateString());
// "1/15/2024" (format depends on locale)

console.log(date.toLocaleTimeString());
// "2:30:00 PM" (format depends on locale)
```

**Date Arithmetic:**
```js
var date1 = new Date(2024, 0, 15);  // Jan 15, 2024
var date2 = new Date(2024, 0, 20);  // Jan 20, 2024

// Difference in milliseconds
var diff = date2 - date1;
console.log(diff);  // 432000000 (5 days in milliseconds)

// Convert to days
var days = diff / (1000 * 60 * 60 * 24);
console.log(days);  // 5

// Add days to a date
var today = new Date();
var futureDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));
console.log("One week from now: " + futureDate);
```

**Practical Examples:**
```js
// Age calculator
function calculateAge(birthDate) {
  var today = new Date();
  var birth = new Date(birthDate);
  var age = today.getFullYear() - birth.getFullYear();
  var monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

console.log(calculateAge("1995-06-15"));  // Age in years

// Days until event
function daysUntil(futureDate) {
  var today = new Date();
  var target = new Date(futureDate);
  var diff = target - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

console.log(daysUntil("2024-12-25") + " days until Christmas");
```

### String Methods

Strings are primitive values, but JavaScript automatically wraps them in String objects when you call methods.

**Length Property:**
```js
var str = "Hello, World!";
console.log(str.length);  // 13
```

**Changing Case:**
```js
var str = "Hello, World!";

console.log(str.toLowerCase());  // "hello, world!"
console.log(str.toUpperCase());  // "HELLO, WORLD!"
console.log(str);  // "Hello, World!" (original unchanged)
```

**Finding Characters:**
```js
var str = "Hello, World!";

console.log(str.charAt(0));     // "H"
console.log(str.charAt(7));     // "W"
console.log(str[0]);            // "H" (alternative)
console.log(str[7]);            // "W" (alternative)

console.log(str.charCodeAt(0)); // 72 (ASCII code for "H")
```

**Searching:**
```js
var str = "Hello, World! Hello!";

console.log(str.indexOf("World"));      // 7 (first occurrence)
console.log(str.indexOf("Hello"));      // 0
console.log(str.indexOf("Hello", 1));   // 14 (search from index 1)
console.log(str.indexOf("xyz"));        // -1 (not found)

console.log(str.lastIndexOf("Hello"));  // 14 (last occurrence)
```

**Extracting Substrings:**
```js
var str = "Hello, World!";

// substring(start, end) - end is exclusive
console.log(str.substring(0, 5));   // "Hello"
console.log(str.substring(7, 12));  // "World"
console.log(str.substring(7));      // "World!" (to end)

// substr(start, length) - deprecated but still common
console.log(str.substr(7, 5));      // "World"
console.log(str.substr(-6, 5));     // "World" (negative = from end)

// slice(start, end) - supports negative indices
console.log(str.slice(0, 5));       // "Hello"
console.log(str.slice(7, 12));      // "World"
console.log(str.slice(-6, -1));     // "World"
console.log(str.slice(7));          // "World!" (to end)
```

**Replacing:**
```js
var str = "Hello, World! Hello!";

// Only replaces first occurrence
console.log(str.replace("Hello", "Hi"));  // "Hi, World! Hello!"

// Replace all (using regex with 'g' flag)
console.log(str.replace(/Hello/g, "Hi")); // "Hi, World! Hi!"

// Original is unchanged
console.log(str);  // "Hello, World! Hello!"
```

**Splitting:**
```js
var str = "apple,banana,cherry";
var fruits = str.split(",");
console.log(fruits);  // ["apple", "banana", "cherry"]

var sentence = "Hello World";
var words = sentence.split(" ");
console.log(words);  // ["Hello", "World"]

// Split into characters
var chars = "Hello".split("");
console.log(chars);  // ["H", "e", "l", "l", "o"]

// Limit number of splits
var limited = str.split(",", 2);
console.log(limited);  // ["apple", "banana"]
```

**Trimming Whitespace:**
```js
var str = "   Hello, World!   ";

console.log(str.trim());       // "Hello, World!"
console.log(str.trimLeft());   // "Hello, World!   " (ES6+)
console.log(str.trimRight());  // "   Hello, World!" (ES6+)
console.log(str);              // "   Hello, World!   " (unchanged)
```

**Concatenating:**
```js
var str1 = "Hello";
var str2 = "World";

console.log(str1.concat(" ", str2));  // "Hello World"
console.log(str1.concat(", ", str2, "!"));  // "Hello, World!"

// Using + is more common
console.log(str1 + " " + str2);  // "Hello World"
```

**Checking Content:**
```js
// ES6+ methods (may not work in older browsers)
var str = "Hello, World!";

// Check if starts with
// str.startsWith("Hello")  // true (ES6+)

// Check if ends with
// str.endsWith("!")  // true (ES6+)

// Check if includes
// str.includes("World")  // true (ES6+)

// ES5 alternatives:
console.log(str.indexOf("Hello") === 0);  // true (starts with)
console.log(str.indexOf("World") !== -1); // true (includes)
```

**Repeating (ES6+):**
```js
// "abc".repeat(3)  // "abcabcabc" (ES6+)

// ES5 alternative:
function repeat(str, times) {
  var result = "";
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("abc", 3));  // "abcabcabc"
```

### Number Methods

**Converting to String:**
```js
var num = 123;

console.log(num.toString());      // "123"
console.log(num.toString(2));     // "1111011" (binary)
console.log(num.toString(16));    // "7b" (hexadecimal)
```

**Fixing Decimals:**
```js
var num = 3.14159;

console.log(num.toFixed(2));      // "3.14" (2 decimal places)
console.log(num.toFixed(0));      // "3"
console.log(num.toFixed(4));      // "3.1416" (rounds)

// Returns string! Convert back if needed:
var rounded = parseFloat(num.toFixed(2));
console.log(rounded);  // 3.14 (number)
```

**Precision:**
```js
var num = 123.456;

console.log(num.toPrecision(4));  // "123.5" (4 significant digits)
console.log(num.toPrecision(2));  // "1.2e+2" (scientific notation)
console.log(num.toPrecision(6));  // "123.456"
```

**Parsing Strings to Numbers:**
```js
// parseInt - extracts integer
console.log(parseInt("123"));        // 123
console.log(parseInt("123.456"));    // 123 (ignores decimals)
console.log(parseInt("123px"));      // 123 (stops at non-digit)
console.log(parseInt("abc"));        // NaN

// Specify base (radix)
console.log(parseInt("1111", 2));    // 15 (binary)
console.log(parseInt("FF", 16));     // 255 (hexadecimal)

// parseFloat - extracts decimal
console.log(parseFloat("123.456"));  // 123.456
console.log(parseFloat("123.456px")); // 123.456
console.log(parseFloat("abc"));      // NaN

// Number() - strict conversion
console.log(Number("123"));          // 123
console.log(Number("123.456"));      // 123.456
console.log(Number("123px"));        // NaN (strict!)
console.log(Number(""));             // 0
console.log(Number(true));           // 1
console.log(Number(false));          // 0
```

**Checking for Valid Numbers:**
```js
console.log(isNaN("hello"));     // true
console.log(isNaN(123));         // false
console.log(isNaN("123"));       // false (coerces to number first)

console.log(isFinite(123));      // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("123"));    // true (coerces to number first)
```

**Number Constants:**
```js
console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);   // 5e-324
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.NaN);         // NaN
```


## Lab Exercises 

### Exercise 1: Array Utilities
Create utility functions for arrays:
```js
// a) Find maximum value in array
function findMax(arr) {
  // Your code here
}

// b) Find minimum value in array
function findMin(arr) {
  // Your code here
}

// c) Calculate sum of array
function sumArray(arr) {
  // Your code here
}

// d) Remove duplicates from array
function removeDuplicates(arr) {
  // Your code here
}

// Test your functions
var numbers = [3, 7, 2, 9, 2, 5, 7, 1];
```

### Exercise 2: Book Library
Create a book library system:
```js
var library = {
  books: [],
  
  addBook: function(title, author, year) {
    // Add book to library
  },
  
  findByAuthor: function(author) {
    // Return all books by author
  },
  
  findByYear: function(year) {
    // Return all books from year
  },
  
  displayAll: function() {
    // Display all books
  }
};

// Test: Add books and search
```

### Exercise 3: Date Calculator
Create functions to work with dates:
```js
// a) Days between two dates
function daysBetween(date1, date2) {
  // Your code here
}

// b) Is leap year?
function isLeapYear(year) {
  // Your code here
}

// c) Format date as "MM/DD/YYYY"
function formatDate(date) {
  // Your code here
}

// d) Get day name (Monday, Tuesday, etc.)
function getDayName(date) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Your code here
}
```

### Exercise 4: String Utilities
Create string manipulation functions:
```js
// a) Reverse a string
function reverseString(str) {
  // Your code here
}

// b) Count vowels in string
function countVowels(str) {
  // Your code here
}

// c) Title case (capitalize first letter of each word)
function titleCase(str) {
  // Your code here
}

// d) Is palindrome?
function isPalindrome(str) {
  // Your code here (ignore spaces and case)
}

// Test cases
console.log(reverseString("hello"));        // "olleh"
console.log(countVowels("JavaScript"));     // 3
console.log(titleCase("hello world"));      // "Hello World"
console.log(isPalindrome("racecar"));       // true
console.log(isPalindrome("A man a plan a canal Panama"));  // true
```

### Exercise 5: Object Manipulation
Create a todo list using objects and arrays:
```js
var todoList = {
  todos: [],
  
  add: function(task, priority) {
    // Add todo with task and priority (high/medium/low)
  },
  
  complete: function(task) {
    // Mark task as completed
  },
  
  remove: function(task) {
    // Remove task from list
  },
  
  getByPriority: function(priority) {
    // Return all tasks with given priority
  },
  
  displayAll: function() {
    // Display all todos with status
  }
};
```
