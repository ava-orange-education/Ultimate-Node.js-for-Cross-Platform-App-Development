try {
    throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "EvalError"
    console.log(e.fileName); // "someFile.js"
    console.log(e.lineNumber); // 10
    console.log(e.columnNumber); // 0
    console.log(e.stack); // "@Scratchpad/2:2:9\n"
}

//

var verifyNumber = function (num) {
    if (num < MIN || num > MAX) {
        throw new RangeError('Parameter range must be between ' + MIN + ' and ' + MAX);
    }
};

try {
    verifyNumber(50);
} catch (e) {
    if (e instanceof RangeError) {
        // Handle range error
    }
}

//

function sumOfNumbers() {
    let val1 = 2;
    let val2 = 3;
    return val1 + val2;
}

sumOfNumbers();

console.log(val1);

//

function check(x, y){
    if((x === 10) && (y ===5){   // Missing closing parenthesis; should be if((x === 10) && (y ===5)){...
        return true
    } else {
      return false
     }
}

//
let a = 1
console.log(a()) 
