// var newWindow;
// function openNewWindow(){
// newWindow = window.open("./page.html", "_blank", "width=600,height=400,left=600,top=100");
// }
// function closeNewWindow(){
//     newWindow.close();
// }

// function focusNewWindow(){
//     newWindow.focus();
// }
// function blurNewWindow(){
//     newWindow.blur();
// }

// var myTimer;
// var myTimer2;
// function startButton() {
//   myTimer = setTimeout(function () {
//     console.log("Hello after 10 seconds");
//   }, 4000);
//   myTimer2 = setTimeout(function () {
//     console.log("Hello after 10 seconds");
//   }, 5000);
// }

// function cancelButton() {
//   console.log("Timeout stopped");
//   clearTimeout(myTimer);
//   clearTimeout(myTimer2);
// }

// Interval Example
// var myInterval;
// var count = 60;
// function startButton() {
//   myInterval = setInterval(function () {
//     count--;
//     console.log("Interval count: " + count);
//   }, 1000);
// }

// function cancelButton() {
//   console.log("Interval stopped at count: " + count);
//   clearInterval(myInterval);
// }

// var user =document.getElementById("omar")
// console.log(user)

// var paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs)


// var myItem = document.querySelector(".item")
// console.log(myItem)
// var myItem = document.querySelectorAll(".item")
// console.log(myItem)

// let first = document.querySelector("#first");
// console.log(first.parentElement.parentNode);

// var parent = document.getElementById("parent");
// console.log(parent.children);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.childElementCount);
// console.log(parent.children.length);
// console.log(parent.hasChildNodes())

// var second = document.getElementById("second");
// console.log(second.previousSibling)
// console.log(second.previousElementSibling)

// var link = document.getElementById("my-link");
// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://www.facebook.com");
// console.log(link.getAttribute("href"))
// console.log(link.href)
// link.setAttribute("target", "_blank");
// link.removeAttribute("target");
// console.log(link.target)

// var title =document.getElementById("title")
// title.setAttribute("class", "my-title green")
// console.log(title.classList[1])
// title.classList.add("blue")
// title.classList.remove("green")
// title.classList.toggle("red")
// console.log(title.classList)

// function fireStyleChange(){
//     var box = document.querySelector(".box");
//     box.classList.toggle("highlight");
// }

// var myDiv = document.getElementById("my-div");
// console.log(myDiv.innerHTML);
// myDiv.innerHTML = "Hello Omar";
// myDiv.innerHTML += "<p>This is a new paragraph</p>";

// console.log(myDiv.textContent);

// var myDiv = document.getElementById("my-div");
// myDiv.style.backgroundColor = "lightblue";
// myDiv.style.padding = "20px";
// myDiv.style.borderRadius = "8px";
// myDiv.style.border = "2px solid blue";
// myDiv.style.cssText = "background-color: lightblue; padding: 20px; border-radius: 8px; border: 2px solid blue;";

// 3 steps to create and append a new element
// var myBox = document.querySelector(".box");
// var myParagraph = document.createElement("p");
// myParagraph.innerText = "This is a dynamically created paragraph.";
// myBox.appendChild(myParagraph);

// var myElement = document.querySelector(".p1");
// myElement.appendChild(myParagraph);

// myElement.removeChild(myParagraph)

function changeBodyBackground(color) {
    document.body.style.backgroundColor = color;
}
document.body.onload = changeBodyBackground("red");