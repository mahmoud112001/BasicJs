# BOM & DOM Manipulation - Lecture Notes

## BOM (Browser Object Model)

### Dialogs
```js
// Alert - Display message
alert("Hello, World!");

// Confirm - Yes/No dialog (returns true/false)
var result = confirm("Are you sure?");
if (result) {
  console.log("User confirmed");
}

// Prompt - Input dialog (returns string or null)
var name = prompt("What is your name?", "Guest");
if (name) {
  console.log("Hello, " + name);
}
```

### Window Object
```js
// Window dimensions
console.log(window.innerWidth);   // Viewport width
console.log(window.innerHeight);  // Viewport height

// Scroll position
console.log(window.scrollX);
console.log(window.scrollY);

// Scroll control
window.scrollTo(0, 500);    // Scroll to position
window.scrollBy(0, 100);    // Scroll by amount
window.scrollTo(0, 0);      // Scroll to top

// Open/Close windows
var popup = window.open("https://example.com", "popup", "width=600,height=400");
popup.close();

// Focus
window.focus();
window.blur();
```

### Navigator Object
```js
// Browser info
console.log(navigator.userAgent);     // Full user agent string
console.log(navigator.platform);      // OS platform
console.log(navigator.language);      // Browser language
console.log(navigator.onLine);        // Online status
console.log(navigator.cookieEnabled); // Cookies enabled?

// Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Lat:", position.coords.latitude);
    console.log("Lon:", position.coords.longitude);
  });
}
```

### Location Object
```js
// URL parts
console.log(location.href);      // Full URL
console.log(location.protocol);  // "https:"
console.log(location.hostname);  // "example.com"
console.log(location.pathname);  // "/path/page.html"
console.log(location.search);    // "?id=123"
console.log(location.hash);      // "#section"

// Navigation
location.href = "https://example.com";        // Navigate
location.assign("https://example.com");       // Navigate
location.replace("https://example.com");      // Replace (no history)
location.reload();                            // Reload page
```

### History Object
```js
// Navigation
history.back();      // Go back
history.forward();   // Go forward
history.go(-2);      // Go back 2 pages

// HTML5 History API
history.pushState({page: 1}, "Title", "?page=1");     // Add to history
history.replaceState({page: 2}, "Title", "?page=2");  // Replace current

// Listen for history changes
window.addEventListener("popstate", function(event) {
  console.log("State:", event.state);
});
```

### Screen Object
```js
// Screen dimensions
console.log(screen.width);        // Total screen width
console.log(screen.height);       // Total screen height
console.log(screen.availWidth);   // Available width
console.log(screen.availHeight);  // Available height
console.log(screen.colorDepth);   // Color depth (bits)

// Center window example
function openCenteredWindow(url, width, height) {
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
  return window.open(url, "centered", features);
}
```

### Timers
```js
// setTimeout - Execute once after delay
var timerId = setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);

// With arguments
setTimeout(function(name) {
  console.log("Hello, " + name);
}, 1000, "Alice");

// Cancel timeout
clearTimeout(timerId);

// setInterval - Execute repeatedly
var counter = 0;
var intervalId = setInterval(function() {
  counter++;
  console.log("Count:", counter);
  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 1000);

// Countdown example
function countdown(seconds) {
  var remaining = seconds;
  var timerId = setInterval(function() {
    console.log(remaining + " seconds");
    remaining--;
    if (remaining < 0) {
      clearInterval(timerId);
      console.log("Done!");
    }
  }, 1000);
}
```

---

## DOM (Document Object Model)

### What is DOM?
**Get something to do something**

The DOM represents the HTML document as a tree of objects that JavaScript can manipulate.

```html
<!DOCTYPE html>
<html>
  <head><title>Page</title></head>
  <body>
    <h1>Title</h1>
    <p>Paragraph</p>
  </body>
</html>
```

### DOM Tree (as list of nodes)
```
document (9 - Document node)
  └─ html (1 - Element node)
      ├─ head (1 - Element node)
      │   └─ title (1 - Element node)
      │       └─ "Page" (3 - Text node)
      └─ body (1 - Element node)
          ├─ h1 (1 - Element node)
          │   └─ "Title" (3 - Text node)
          └─ p (1 - Element node)
              └─ "Paragraph" (3 - Text node)

Node Types: 1=Element, 3=Text, 8=Comment, 9=Document
```

### DOM Tree (as list of elements)
```js
// Only element nodes (no text/comment nodes)
document.documentElement         // <html>
  └─ children
      ├─ document.head          // <head>
      │   └─ children[0]        // <title>
      └─ document.body          // <body>
          ├─ children[0]        // <h1>
          └─ children[1]        // <p>
```

---

## Accessing DOM Elements

### document.getElementById
```js
// Get single element by ID
var header = document.getElementById("header");
console.log(header);  // Returns element or null
```

### document.getElementsByClassName
```js
// Get all elements with class (returns HTMLCollection)
var boxes = document.getElementsByClassName("box");
console.log(boxes.length);
console.log(boxes[0]);  // First element

// Loop through
for (var i = 0; i < boxes.length; i++) {
  console.log(boxes[i].textContent);
}
```

### document.getElementsByTagName
```js
// Get all elements by tag (returns HTMLCollection)
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);

// Get all elements
var all = document.getElementsByTagName("*");
```

### document.querySelector
```js
// Get FIRST element matching CSS selector
var main = document.querySelector("#main");              // By ID
var intro = document.querySelector(".intro");            // By class
var firstP = document.querySelector("p");                // By tag
var firstLi = document.querySelector("ul li");           // Complex
var input = document.querySelector("input[type='text']"); // Attribute
```

### document.querySelectorAll
```js
// Get ALL elements matching CSS selector (returns NodeList)
var boxes = document.querySelectorAll(".box");
var items = document.querySelectorAll("li");

// Loop with forEach
boxes.forEach(function(box) {
  console.log(box.textContent);
});

// Traditional loop
for (var i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}
```

### Parent, Child, Siblings
```html
<div id="parent">
  <h2 id="title">Title</h2>
  <p id="first">First</p>
  <p id="second">Second</p>
</div>
```

```js
var first = document.getElementById("first");

// Parent
console.log(first.parentNode);          // <div id="parent">
console.log(first.parentElement);       // <div id="parent">

// Children (from parent)
var parent = document.getElementById("parent");
console.log(parent.children);           // [h2, p, p] (HTMLCollection)
console.log(parent.firstElementChild);  // <h2 id="title">
console.log(parent.lastElementChild);   // <p id="second">

// Siblings
console.log(first.nextElementSibling);      // <p id="second">
console.log(first.previousElementSibling);  // <h2 id="title">

// Check containment
console.log(parent.contains(first));    // true
```

---

## Manipulating DOM Elements

### Changing Attributes

#### element.getAttribute
```js
var img = document.getElementById("logo");
console.log(img.getAttribute("src"));    // Get attribute value
console.log(img.getAttribute("alt"));
```

#### element.setAttribute
```js
img.setAttribute("src", "newlogo.png");  // Set attribute
img.setAttribute("alt", "New Logo");
img.setAttribute("data-id", "123");      // Add new attribute
```

#### element.removeAttribute
```js
img.removeAttribute("width");            // Remove attribute
console.log(img.hasAttribute("width")); // false
```

#### Class Manipulation
```js
var box = document.getElementById("box");

// className - all classes as string
console.log(box.className);              // "container blue"
box.className = "container red";

// classList - modern way (preferred)
box.classList.add("active");             // Add class
box.classList.remove("blue");            // Remove class
box.classList.toggle("highlight");       // Toggle class
console.log(box.classList.contains("red")); // Check class (true)
box.classList.replace("red", "green");   // Replace class
```

### Changing Content

#### textContent
```js
var box = document.getElementById("box");

// Get text (strips HTML)
console.log(box.textContent);

// Set text (escapes HTML - SAFE)
box.textContent = "Hello <strong>World</strong>";  // Shows as plain text
```

#### innerText
```js
// Similar to textContent but respects CSS
console.log(box.innerText);
box.innerText = "New text";
```

#### innerHTML
```js
// Get/Set HTML content (parses HTML)
console.log(box.innerHTML);              // Gets HTML
box.innerHTML = "Hello <strong>World</strong>";  // Renders HTML

// ⚠️ SECURITY WARNING: Can cause XSS attacks with user input
// BAD: box.innerHTML = userInput;
// GOOD: box.textContent = userInput;

// Escape function for safety
function escapeHTML(str) {
  var div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
```

---

### Changing Styles

#### element.style.property
```js
var box = document.getElementById("box");

// Set individual styles (camelCase!)
box.style.color = "red";
box.style.backgroundColor = "yellow";    // CSS: background-color
box.style.fontSize = "20px";             // CSS: font-size
box.style.border = "2px solid black";

// Get inline styles only
console.log(box.style.color);            // "red"

// Remove style
box.style.backgroundColor = "";
```

#### element.style.cssText
```js
// Set multiple styles at once (overwrites existing!)
box.style.cssText = "width: 200px; height: 200px; background: blue;";

// Remove all inline styles
box.style.cssText = "";
```

#### getComputedStyle
```js
// Get final computed styles (including CSS)
var computed = window.getComputedStyle(box);
console.log(computed.backgroundColor);   // "rgb(255, 0, 0)"
console.log(computed.width);             // "200px"
```

#### Best Practice: Use CSS Classes
```js
// ❌ BAD: Inline styles
element.style.color = "red";
element.style.fontSize = "20px";

// ✅ GOOD: CSS classes
element.classList.add("error");

// CSS: .error { color: red; font-size: 20px; }
```

---

## Creating Elements

### document.createElement
```js
// Create new element
var div = document.createElement("div");
var p = document.createElement("p");
var img = document.createElement("img");

// Set properties
div.id = "container";
div.className = "box";
p.textContent = "Hello";
img.src = "image.png";
```

### element.appendChild
```js
// Add element to end
var container = document.getElementById("container");
var newP = document.createElement("p");
newP.textContent = "New paragraph";

container.appendChild(newP);  // Adds to end of container
```

### element.insertBefore
```js
// Insert before specific element
var container = document.getElementById("container");
var third = document.getElementById("third");

var second = document.createElement("p");
second.textContent = "Second";

container.insertBefore(second, third);  // Insert before 'third'

// Insert at beginning
container.insertBefore(newElement, container.firstElementChild);
```

### Practical Example: Create List
```js
function createList(items) {
  var ul = document.createElement("ul");
  
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    li.textContent = items[i];
    ul.appendChild(li);
  }
  
  return ul;
}

var list = createList(["Apple", "Banana", "Cherry"]);
document.body.appendChild(list);
```

---

## Cloning Elements

### element.cloneNode
```js
var original = document.getElementById("original");

// Shallow clone (element only, no children)
var shallow = original.cloneNode(false);

// Deep clone (element + all children)
var deep = original.cloneNode(true);

document.body.appendChild(deep);
```

---

## Removing Elements

### element.removeChild
```js
var container = document.getElementById("container");
var child = document.getElementById("child");

// Remove child from parent
container.removeChild(child);
```

### element.remove()
```js
var element = document.getElementById("element");

// Remove element itself (modern)
element.remove();

// ES5 alternative
element.parentNode.removeChild(element);
```

### Remove All Children
```js
var container = document.getElementById("container");

// Method 1: Loop
while (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Method 2: innerHTML
container.innerHTML = "";
```

### replaceChild
```js
var container = document.getElementById("container");
var oldElement = document.getElementById("old");
var newElement = document.createElement("p");

newElement.textContent = "New content";
container.replaceChild(newElement, oldElement);
```

---

## Quick Reference

### Selection Methods Comparison
```js
// Fast, simple
document.getElementById("id")              // Single element
document.getElementsByClassName("class")   // HTMLCollection
document.getElementsByTagName("div")       // HTMLCollection

// Flexible, powerful
document.querySelector("#id")              // Single element (first match)
document.querySelectorAll(".class")        // NodeList (all matches)
```

### Best Practices
1. ✅ Use CSS classes instead of inline styles
2. ✅ Use `textContent` for text (safer than `innerHTML`)
3. ✅ Sanitize user input before using `innerHTML`
4. ✅ Use `classList` for class manipulation
5. ✅ Use `querySelector` for complex selections
6. ✅ Clean up timers to prevent memory leaks

---
