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
  