// var userName = "Karma";
// function capitalize(userName){ //function statement declaration
//     return userName.toUpperCase();
// }
// function loweringCase(userName){
//     return userName.toLowerCase();
// }

// function changeCase(userName ,callback){
//     var newName = callback(userName);
//     console.log("Hi " + newName + "!");
// }
//  changeCase("karema", capitalize); //calling the function
//  changeCase("HUSSEIN", loweringCase); //calling the function
//  changeCase("HUSSEIN", function(){
//     return "ANONYMOUS";
//  }); //calling the function

// console.log(my)

// var myFun = function doRecursion(){
//     console.log("This is my function");
// }
// myFun();

// functions can Return functions
// function greetMorning(greeting){
//     return function(name){
//         console.log(greeting+ " " + name);
//     }
// }
// greetMorning("Good Morning")("Dalia")
// var morningGreet = greetMorning("Good Morning");
// var helloGreet = greetMorning("Hello");
// morningGreet("Dalia");
// helloGreet("Karema");

// function returnHello(){
//     return "Hello"
// }

// var output = returnHello();
// console.log(output);

// function countArgs(){
//     var sum = 0;
//     for(var i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log("The sum is: " + sum);
//     return sum;
// }
// countArgs(1,2)
// countArgs(1,2,3,4,5,6,10)

//ARRAYS
// var myArray2 = new Array(3);

// console.log(myArray2);
// var myArray3 = [12, "Hello", true, null, undefined, {name: "Karema"}, [1,2,3]];
// console.log(myArray3);
// console.log("The length of myArray3 is: " + myArray3.length);
// console.log("The first element is: " + myArray3[0]);
// console.log("The last element is: " + myArray3[myArray3.length - 1]);

//looping through an array
// for(var i=0; i<myArray.length; i++){
//     console.log("Element at index " + i + " is: " + myArray[i]);
// }

//arrays are mutable
// var myArray = [10,20,30,40,50]; //recommended way
// myArray[0] = 100;
// console.log("After modification, first element is: " + myArray[0]);
// console.log("original ARRAY", myArray)
// mutating methods
// myArray.push(60); //adds element at the end
// console.log("After push, myArray is: " + myArray);

// myArray.pop(); //removes element from the end
// console.log("After pop, myArray is: " + myArray);

// myArray.unshift(5); //adds element at the beginning
// console.log("After unshift, myArray is: " + myArray);

// myArray.shift(); //removes element from the beginning
// console.log("After shift, myArray is: " + myArray);

// var newUser = ["walaa", 23];

// myArray.splice(2,0, "newUser"); //removes 1 element at index 2
// console.log (myArray);

// myArray.reverse();
// console.log("After reverse, myArray is: " + myArray);

// var students = ["Karema", "Dalia", "Hussein", "Aly"];
// students.sort();
// console.log("After sort, students array is: " + students);

// var numbers = [40,100,1,5,25,10];
// numbers.sort(function(a,b){
//     return b-a;
// });
// console.log("After sort, numbers array is: " + numbers);

// ------------------ non-mutating methods ------------------

// var myArray = [10,20,30,40,50, 60];
// var slicedArray = myArray.slice(2,4); //from index 2 to index 4 (not included)
// console.log("slicedArray is: " + slicedArray);
// console.log("original ARRAY after slice", myArray)

// var array1 = [1,2,3];
// var array2 = [4,5,6];

// var combinedArray = array1.concat(array2, [8,9,10]);
// console.log("combinedArray is: " + combinedArray);
// console.log("original ARRAY1 after concat", array1)
// console.log("original ARRAY2 after concat", array2)

// var myArray = [1,2,3,4,5];
// var flag = myArray.includes(3);
// console.log("Is 3 present in myArray? " + flag);
// var flag2 = myArray.includes(10);
// console.log("Is 10 present in myArray? " + flag2);

// var myArray = [1,2,3,4,5, 11];
// var flag = myArray.every(function(element){
//     return element < 10;
// });
// console.log("Are all elements less than 10? " + flag);

//  var flag2 = myArray.some(function(element){
//         return element > 10;
// });
// console.log("Is there any element greater than 10? " + flag2);

// var myArray = [1,2,3,4,5];
// var mappedArray = myArray.reduce(
//     function(accumulator, currentValue){
//         return accumulator + currentValue;
//     }, 10
// )
// console.log("The sum of all elements is: " + mappedArray);

// arr .filter()

// var students = ["aly", "dalia", "hussein", "karema", "mona"];
// var forEachReturn = students.forEach(function (name,i) {
//     // students[i] = students[i].toUpperCase();
//     // students[i] = name.toUpperCase();
//     console.log("Hello " + name);
//     // return name; // forEach does not return anything
// });
// var studentsInUpperCase = students.map(function (name) {
//     return name.toUpperCase();
// });
// console.log("studentsInUpperCase: ", studentsInUpperCase);
// console.log(forEachReturn)
// console.log(students);

//Objects

var target = "name";

// var myObject = {
//     name: "Karema",
//     "user-address": "Cairo",
//     1: "one",
// };
// console.log("myObject: ", myObject);
// console.log("Name is: " + myObject.name);
// myObject. = 23;
// console.log("Age is: " + myObject.age);
// console.log("Access using bracket notation: " + myObject[target]);
// // console.log("Access using bracket notation: " + myObject.user-address);
// console.log("Access using bracket notation: " + myObject[1]);
// console.log("Access using bracket notation: " + myObject["user-address"]);

// var user = {
//     name: "Karema",
//     age: 23,
//     greet: function(){
//         console.log("Hello " + this.name);
//     }
// };
// user.greet();

var anotherObject = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};

for(var key in anotherObject){
    console.log("Key is: " + key + ", Value is: " + anotherObject[key]);
}
// Object.keys()
// var keysArray = Object.keys(anotherObject);
// console.log("keysArray: ", keysArray);
// console.log(typeof keysArray[0]);

// property deletion
delete anotherObject.prop2;
console.log("anotherObject after deletion: ", anotherObject);