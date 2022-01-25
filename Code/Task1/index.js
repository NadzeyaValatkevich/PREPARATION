//task 1
function numberToString(num) {
    return String(num);
  }
  console.log(numberToString(123));

//task 2
const reverseSeq = n => {
    const array = [];
    for(let i = n; i >= 1; i--) {
        array.push(i);   
    }
    return array;   
};
console.log(reverseSeq(5));

//task 3
function paperwork(n, m) {
    let num = 0;
    for(let i = 1; i <= n; n++) {
        for(let j = 1; j <= m; m++) {
            num += j;
        };
    };
    return num;
};

console.log(paperwork(2, 5));
