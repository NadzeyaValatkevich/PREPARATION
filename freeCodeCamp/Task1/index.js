//task1
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//task2
const someAdjective = "JavaScript";
let myStr = "Learning to code is ";
myStr += someAdjective;

//task3
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//task 4
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //task 5
  const magic = () => new Date();

  //task 6
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  //task 7
  const increment = (number, value = 1) => number + value;

  //task 8
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  };
  sum([0,1,2]);

//task 9
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

//task 10
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

//task 11
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
  
const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorroww } = HIGH_TEMPERATURES; 

//task 12
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
 
const LOCAL_FORECAST = { today: {low: lowToday}};
const LOCAL_FORECAST = { today: {high: highToday}}; 

//task 13 Return a Value from a Function with Return
function timesFive(num) {
  return (num * 5);
};

const val = timesFive(5);

//task 14  Global Scope and Functions
// Declare the myGlobal variable below this line
const myGlobal = 10;
var oopsGlobal;
function fun1() {
  oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
};

//task 15 Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b);
