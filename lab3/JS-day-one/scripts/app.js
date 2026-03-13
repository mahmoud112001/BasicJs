// alert('Welcome to Day One!')
//comment one line
/**
 * multi line comment
 * 
 * 
 * 
 */
// console.log('Hello World!');
// var userName = 'John Doe'; // string datatype
// userName[1]= 'a';
// userName= 'Jane Doe';
// console.log(userName[1])

// //variable scope 
// var x= 10; // function scope
// function test(){
//     var globalVar= 'I am global'; // global scope after execution of function (very Not recommended)
//     var functionVar= 'I am local';
//     console.log(x);
//     console.log("from inside function: " + functionVar);
// }
// test();
// // console.log("try to access functionVar from outside function", functionVar)
// console.log(globalVar);
// // datatypes in javascript
// testMe= "Hello"; // string
// testMe= 100;
// console.log(testMe)
// dataTypes
// literal creation
// var str= "Hello World"; // string
// var constructorStr= new String("Hello World"); // string object - constructor creation is nt recommended in most scenarios
// var num= 100; // number
// var constructorNum = new Number(100); // number object
// var isTrue= true; // boolean
// var isFalse= false; // boolean
// var undef= undefined;
// var nul= null; 
// var testMe;
// ----------------------

// var obj= {name: 'John', age: 30}; // object
// var arr= [1, 2, 3, 4, 5]; // array
// function greetUser(name){
//     if(typeof name !== 'string'){
//         return null
//     }else{
//        return name= name.trim();
//     }
// }
// var output = greetUser("  Alice   ");
// console.log(output);

// ----------------------

// numbers 
var a= 10;
var b= 3;

// arithmetic operators
// console.log("Addition: ", a + b); // 13
// console.log("Subtraction: ", a - b); // 7
// console.log("Multiplication: ", a * b); // 30
// console.log("Division: ", a / b); // 3.3333
// console.log("Modulus: ", a % b); // 1
// console.log("Exponentiation: ", a ** b); // 1000

// console.log("a"+5)
// console.log(typeof ("a"-5))
// console.log(NaN+ 5)
// console.log(NaN+ NaN)
// console.log(NaN == NaN)
// console.log(undefined == undefined)
// // you can check on nan with comparison
// console.log(false == false)
// console.log(Infinity == Infinity)
// var x = NaN;
// console.log(x !== x)
// console.log("hi "+ x)
// console.log(5/-0)
// console.log(undefined + undefined)

// console.log("5"+5); //cast to string and concatenate
// console.log(typeof ("5"-2)); // cast to number and subtract
// console.log("10"* "2"); // cast to number and multiply
// console.log("10"/ "2"); // cast to number and divide
// console.log("10"% "3"); // cast to number and modulus
// console.log("10"/ "hello"); // NaN
// console.log(true + 1); // 2 (true is cast to 1)
// console.log(false + 1); // 1 (false is cast to 0)
// console.log(null + 5); // 5 (null is cast to 0)
// console.log(undefined + 5); // NaN (undefined cannot be cast to a number)
// console.log("5" + true); // 5true (true is cast to "true" and concatenated)
// console.log("omar" + {name:"omar"}); // omar[object Object]


// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// // ------------\
// console.log("Not Falsy")
// console.log(Boolean(" "))
// console.log(Boolean([]))
// console.log(Boolean({}))


// explicit conversion
// var strNum= "123";
// var num1= Number(strNum); // converts string to number
// var num2 = parseInt(strNum); // converts string to number
// var num3 = parseFloat(strNum); // converts string to number 
// var num4 = +strNum; // unary plus operator to convert string to number
// console.log(num1, typeof num1);

// var num5= String(456); // converts number to string
// console.log(num5, typeof num5);


//  operators
var num = 10;
num += 5; // num = num + 5
num++;
--num;

//comparison operators
console.log(5 != '5'); // true (loose equality, type coercion)
console.log(5 !== '5'); // false (strict equality, no type coercion)
// chaining comparison
console.log(10 > 5 && 5 > 2); // true
console.log(10 > 5 || 5 < 2); // true

//  short circuit evaluation
function getValue(){
    console.log("Function executed");
    return 42;
}
var result = true && getValue();

var userName = userName || "Default User";
 console.log(userName)

// ternary operator
// var age = 20;
// var canVote = (age >= 18) ? "Yes" : "No";
// console.log("Can vote: ", canVote);

// var day = 3;
// switch(day){
//     case 1:
//     case 2:
//     case 3:
//         console.log("some day");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break; 
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;  
//     default:
//         console.log("Another day");
// }

for(var i=1; i<=5; i++){
    console.log("this won't be skipped")
    if(i===3){
        continue;
        console.log("Iteration: ", i);
    }
}