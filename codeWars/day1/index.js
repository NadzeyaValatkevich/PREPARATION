//task1
function paperwork(n, m) {
    let num = 0;
    if(n == 0 || m == 0) {
        return 0;
    } else {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            num += 1;
        };
    };
    };
    return num;
};

console.log(paperwork(-5, 5));

//task2
function findNeedle(haystack) {
    const index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
};

//task3
function litres(time) {
    return Math.floor(time * 0.5);
};
console.log(litres(11.8));

//task4
function basicOp(operation, value1, value2)
{
  if(operation === '+') {
    return value1 + value2;
  }
  else if(operation === '-') {
    return value1 - value2;
  } else if(operation === '*') {
    return value1 * value2;
  } else if(operation === '/') {
    return value1 / value2;
  };
};

//task5
function greet (name, owner) {
    if(name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    };
};

//task6
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
};

//task7
function stringToArray(string){
    return string.split(' ');
};

//task8
function grow(x) {
    let mult = 1;
    for(let i of x) {
        mult *= i;
    };
    return mult;
};

//task9
function findOdd(array) {
    let count = 0;
    let last;

    array.sort();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === last) {
            count++;
            continue;
        } 
        if (count % 2) return last;
        last = array[i];
        count = 1;
    }
    return last;
};

//task10
function addBinary(a,b) {
    let multy = a + b;
    let binary = (multy % 2).toString();
    while(multy > 1) {
        multy = parseInt(multy / 2);
        binary = (multy % 2) + binary;
    };
    return binary;
};

//task 11
function isTriangle(a,b,c)
{ if(a <= 0 || b <= 0 || c <= 0) {
  return false 
} 
  if(a + b > c && a + c > b && b + c > a) {
  return true;
}
   return false;
}

//task 12
function hero(bullets, dragons){
    return (bullets / 2) >=  dragons ? true : false;
};

console.log(hero(7,4));

//task 13
function lovefunc(flower1, flower2){
    if(!(flower1 % 2) && (flower2 % 2)) {
      return true;
    } if(!(flower2 % 2) && (flower1 % 2)) {
      return true;
    } return false;
  }

// task 14
function highAndLow(numbers){
    const arr = numbers.split(" ").map(item => Number(item)).sort((a,b) => b - a)
      return String(arr[0] + " " + String(arr[arr.length - 1]))
  }


// task 15
function repeatStr (n, s) {
    return s.repeat(n);
  }

// task 16
function maps(x){
  return x.map(item => item * 2);
  }

  //task 17
  function squareSum(numbers){
    let sum = 0;
    for(let item of numbers) {
      sum += (item ** 2);
    };
    return sum;
  }

  //task 18
  function feast(beast, dish) {
    // const newbeast = beast.split('');
    if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
      return true;
    } return false;
    };
  console.log(feast ("brown bear", "bear claw"));

  //task19
  function sumMix(x){
    return x.reduce(function(sum, current) {
    return sum + parseFloat(current);
  },0);
  };
  
  console.log(sumMix([9, 3, '7', '3']));

  //task20
  function even_or_odd(number) {
    if(!(number % 2)) {
      return 'Even'
    } return 'Odd' 
  };

  //task21
  function fakeBin(x){
    let a = '';
    for(let i = 0; i <= x.length - 1; i++) {
      if(Number(x[i]) < 5) {
        a += 0;
      } else {
        a += 1;
      }
    }
    return a;
  }

  //task22
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    const year = (dadYearsOld - (sonYearsOld * 2));
    if(year < 0) {
      return -year;
    } return year;
  };
  console.log(twiceAsOld(36, 7));
  
  //task 23
  var stringToNumber = function(str){
    return parseFloat(str);
  }
  
  console.log(stringToNumber("1234"));
  console.log(stringToNumber("-7"));
  
  //task 24
  function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
    };
  console.log(setAlarm(true, false));

  //task 25 Welcome!
  function greet(language) {
    let obj = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
    return (obj[language] === undefined ? 'Welcome' : obj[language])    
};

console.log(greet('english'));
console.log(greet('flemish'));
console.log(greet('IP_ADDRESS_INVALID'));

//task 26 Can we divide it?
function isDivideBy(number, a, b) {
  return ((number % a === 0) && (number % b === 0)) ? true : false;
};
console.log(isDivideBy(-12, 2, -5));

//task 27 Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  const array = str.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  array.forEach((item) => {
        
    vowels.forEach((elem) => {
        
        if (item === elem) {
            return vowelsCount += 1;
        }; 
    });   
});
  return vowelsCount;
}

console.log(getCount("abracadabra"))


//tasks 27 Sum of positive
function positiveSum(arr) {
  const sum = arr.reduce((accum, item) => {
    if(item > 0) {
      accum += item
    } 
    return accum;
  }, 0);
  return sum; 
};

//task 28 You Can't Code Under Pressure #1

function doubleInteger(i) {
  i *= 2;
  
  return i;
};

console.log(doubleInteger(2));

//task 29 Categorize New Member

function openOrSenior(data){
  const outPut = data.map((el) => ((el[0]) >= 55) ? 'Senior' : 'Open');
  return outPut
 };
 

 //task 30 The highest profit wins!
 function minMax(arr){
  let newArr = [];
  if(arr.length > 1) {
   newArr[0] = Math.min(...arr);
   newArr[1] = Math.max(...arr);
   
  } else newArr = [arr[0], arr[0]]; 
  return newArr; 
};
console.log(minMax([1]));

//task 32 Remove First and Last Character
function removeChar(str){
  let newArray
newArray = str.split('');
newArray.shift();
newArray.pop();
return newArray.join("")
 };

 console.log(removeChar('removeChar'));

 //task 33 Sentence Smash
 function smash (words) {
  return words.join(" ")
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));

//task 34 Square Every Digit
function squareDigits(num) {
  let number = num.toString().split("").map((elem) => elem ** 2).join('')
  return parseInt(number);
}

console.log(squareDigits(3212));

//task 35 Remove All The Marked Elements of a List

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(elem => !values_list.includes(elem)) 
  
};

console.log(Array.prototype.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]));

//task 36 Multiples of 3 or 5

function solution(number) {
  let sum = 0;
  for(let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) { 
      sum += i
     }
}
return sum
}
console.log(solution(10));

//task 37 Array.diff

function arrayDiff(a,b) {
  return a.filter(elem => !b.includes(elem));
}
console.log(arrayDiff([1,2,3], [1,2]));

//task 38 Count characters in your string

function count (string) {

  let array = string.split('');
  let newArray = {};
  if(array.length !== 0) {
    for(let i of array) {
      if(!newArray[i]) {
        newArray[i] = 1;
      } else {
        newArray[i] += 1;
      }
    }
    return newArray;
  } else {
    return {};
  }
 
};

console.log(count(''));

// task 39 Sum of Digits / Digital Root

function digital_root(n) {
  
  let sum = 0;
 let array = n.toString().split('');
 for(let i of array) {
   sum += +i ;
   (sum.toString().length > 1) ? digital_root(sum) : sum;
 }
 return (sum.toString().length > 1) ? digital_root(sum) : sum;

}

console.log(digital_root(942));

//task 40 Bit Counting

var countBits = function(n) {
  let array = [];
  while(n > 0) {
    if(n % 2 === 0) {
      array.unshift(0) 
    } else {
      array.unshift(1);
    };
    n = parseInt(n / 2);
  }
  return array.reduce((accum, item) => {
    if(item === 1) {
      return accum += item
    } return accum;
  }, 0)
};

console.log(countBits(4));
  
//task 41  List Filtering

function filter_list(l) {
  return l.filter(elem => typeof(elem) === 'number');
  }
  
  console.log(filter_list([1,2,'aasf','1','123',123])); 
  
  //task 42 Find The Parity Outlier

  function findOutlier(integers){
    const newArray = integers.filter(elem => elem % 2 === 0);
    const newArray2 = integers.filter(elem => elem % 2 !== 0);
    if(newArray.length === 1) {
      return newArray[0];
    } else return newArray2[0]
  };
  
  console.log(findOutlier([0, 1, 2]));

  //task 43 Unique In Order

  var uniqueInOrder=function(iterable){
    if(typeof iterable === String) {
        iterable = iterable.split('')
    }

    let newArray = [iterable[0]]

    for(let i of iterable) {
        if(i !== newArray[newArray.length-1]) {
            newArray.push(i)
        }
    }
   return newArray
  }

  console.log(uniqueInOrder([1,2,2,3,3]))

  //task 44 Find the unique number

  function findUniq(arr) {
    for(var i = 1; i<arr.length; i++)
      {
      
      if(arr[i]==arr[i-1] && arr[i]!=arr[i+1])
        return arr[i+1];
        
      else if(arr[i]!=arr[i-1] && arr[i]==arr[i+1])
        return arr[i-1];
        
      else if(arr[i]!=arr[i-1] && arr[i]!=arr[i+1])
        return arr[i];
    }
      
  };

  //task 45 Delete occurrences of an element if it occurs more than n times

  function deleteNth(arr,n){
    let newArray = [];
   for(let i of arr) {
       if(!newArray.includes(i)) {
        newArray.push(i);  
       } else { 
           let num = newArray.reduce((acc, elem) => {
            if(i === elem) {
                 acc += 1
            }
            return acc; 
        }, 0);
        if (num < n) {
            newArray.push(i)
        }
     }   
   }
   return newArray;
  };

  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));

  //task 46 Write Number in Expanded Form
  function expandedForm(num) {
    let newNum = num.toString().split('').reverse();
    let array = [];
    array.push(+newNum[0]);
    let n = 1;
    for (let i=1; i <= newNum.length - 1; i++) {
      array.unshift(newNum[i] * (10**n));
      n++;
    } ;
    
   return array.filter((elem) => elem !== 0).join(" + ") 
   }
   console.log(expandedForm(70304));

   //task 46 Descending Order (7kyu)
   function descendingOrder(n){
    let newN = String(n).split("").sort((a,b) => b - a).join("");
    return +newN;
  };
  
  console.log(descendingOrder(24451));
  