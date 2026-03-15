#  Lab Exercises

## Exercise 1: Interactive Profile Card 

Create a profile card that users can edit in real-time.

**Requirements:**
1. Create HTML structure with:
   - A div with id "profile" containing:
     - An h2 for name (initially "John Doe")
     - A p for bio (initially "Web Developer")
     - An input field and button to change name
     - An input field and button to change bio
2. Use JavaScript to:
   - Get the profile elements using `getElementById`
   - Add click event to name button that updates h2 with input value
   - Add click event to bio button that updates p with input value
   - Clear input fields after updating

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Profile Card</title>
</head>
<body>
  <div id="profile">
    <h2 id="profileName">John Doe</h2>
    <p id="profileBio">Web Developer</p>
  </div>
  
  <div>
    <input type="text" id="nameInput" placeholder="New name">
    <button id="nameBtn">Update Name</button>
  </div>
  
  <div>
    <input type="text" id="bioInput" placeholder="New bio">
    <button id="bioBtn">Update Bio</button>
  </div>
  
  <script>
    // Your code here
  </script>
</body>
</html>
```

---

## Exercise 2: Dynamic Task List 

Build a simple task list where users can add and remove tasks.

**Requirements:**
1. Create HTML with:
   - Input field for task text
   - Button to add task
   - Empty ul with id "taskList"
2. JavaScript functionality:
   - When button clicked, create new li element
   - Set li text to input value (validate not empty)
   - Add a "Delete" button to each li
   - Append li to the task list
   - Clear input after adding
   - Delete button removes the li when clicked

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Task List</title>
</head>
<body>
  <h1>My Tasks</h1>
  
  <input type="text" id="taskInput" placeholder="Enter task">
  <button id="addBtn">Add Task</button>
  
  <ul id="taskList"></ul>
  
  <script>
    // Your code here
  </script>
</body>
</html>
```

---

## Exercise 3: Style Switcher 

Create a theme switcher that changes page styles dynamically.

**Requirements:**
1. Create HTML with:
   - A div with id "content" containing some text
   - Three buttons: "Light Theme", "Dark Theme", "Blue Theme"
2. JavaScript functionality:
   - Light theme: white background, black text
   - Dark theme: black background, white text
   - Blue theme: lightblue background, darkblue text
   - Use `element.style` to change styles
   - Add/remove CSS classes using `classList`

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Theme Switcher</title>
  <style>
    .light { background-color: white; color: black; }
    .dark { background-color: black; color: white; }
    .blue { background-color: lightblue; color: darkblue; }
    #content { padding: 20px; min-height: 200px; }
  </style>
</head>
<body>
  <div id="content">
    <h1>Welcome</h1>
    <p>This is a theme switcher demo.</p>
  </div>
  
  <button id="lightBtn">Light Theme</button>
  <button id="darkBtn">Dark Theme</button>
  <button id="blueBtn">Blue Theme</button>
  
  <script>
    // Your code here
  </script>
</body>
</html>
```

---

## Exercise 4: Image Gallery Navigator 

Build an image gallery with navigation controls.

**Requirements:**
1. Create an array of image objects with `src` and `caption` properties
2. Display one image at a time with its caption
3. Add "Previous" and "Next" buttons to navigate
4. Show current position (e.g., "Image 2 of 4")
5. Disable Previous on first image, disable Next on last image

**Starter Code:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Gallery</title>
  <style>
    #gallery { text-align: center; }
    #mainImage { max-width: 500px; height: 300px; }
    button { margin: 10px; padding: 10px; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>
  <div id="gallery">
    <img id="mainImage" src="" alt="">
    <p id="caption"></p>
    <p id="position"></p>
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>
  </div>
  
  <script>
    var images = [
      {src: "https://via.placeholder.com/500x300/FF0000/FFFFFF?text=Image+1", caption: "Red Image"},
      {src: "https://via.placeholder.com/500x300/00FF00/FFFFFF?text=Image+2", caption: "Green Image"},
      {src: "https://via.placeholder.com/500x300/0000FF/FFFFFF?text=Image+3", caption: "Blue Image"},
      {src: "https://via.placeholder.com/500x300/FFFF00/000000?text=Image+4", caption: "Yellow Image"}
    ];
    
    // Your code here
  </script>
</body>
</html>
```

---
