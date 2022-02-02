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


    