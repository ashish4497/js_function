// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function (n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function add(a, b = 1) {
  var sum = a + b;
  return sum;
}

let add = function (a, b = 1) {
  var sum = a + b;
  return sum;
}

var add = num => num + 1;
add(add);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function sub(a, b = 1) {
  var subtract = a - b;
  return subtract;
}

let sub = function (a, b = 1) {
  var subtract = a - b;
  return subtract;
}

var sub = num => num - 1;
sub(10);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y) {
  var sum = x + y;
  return sum;
}

let add = function (x, y) {
  var sum = x + y;
  return sum;
}

var add = (x, y) => {
  var sum = x + y;
  return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function sub(x, y) {
  var subtract = x - y;
  return subtract;
}

let sub = function (x, y) {
  var subtract = x - y;
  return subtract;
}

var sub = (x, y) => {
  var subtract = x - y;
  return subtract;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function mul(x, y) {
  var multiply = x * y;
  return multiply;
}
var mul = function (x, y) {
  var multiply = x * y;
  return multiply;
}

var mul = (x, y) => {
  var multiply = x * y;
  return multiply;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function div(x, y) {
  var divide = x / y;
  return divide;
}

let div = function (x, y) {
  var divide = x / y;
  return divide;
}

let div = (x, y) => {
  var divide = x / y;
  return divide;
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function Multiplies(x) {
  var mul = x * x;
  return mul;
}

let multiply = function (x) {
  var mul = x * x;
  return mul;
}

let multiply = (x) => {
  var mul = x * x;
  return mul;
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function cal(a, b) {
  var add = a + b;
  switch (add) {
    case (add):
      console.log(`${a} + ${b} = ${add}`)
  }
}

function cal(a, b) {
  var sub = a - b;
  switch (sub) {
    case (sub):
      console.log(`${a} - ${b} = ${sub}`)
  }
}

function cal(a, b) {
  var mul = a * b;
  switch (mul) {
    case (mul):
      console.log(`${a} * ${b} = ${mul}`)
  }
}

function cal(a, b) {
  var div = a / b;
  switch (div) {
    case (div):
      console.log(`${a} * ${b} = ${div}`)
  }
}



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
// declaration 
function compair(a, b) {
  if (a > b) {
    let greater = true;
    return (`a is larger then b ${greater}`);
  } else {
    return false;
  }
}
// expression 
let compair = function (a, b) {
  if (a > b) {
    let greater = true;
    return (`a is larger then b ${greater}`);
  } else {
    return false;
  }
}
// arrow 
let compair = (a, b) => {
  if (a > b) {
    let greater = true;
    return (`a is larger then b ${greater}`);
  } else {
    return false;
  }
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
// declare 
function compair(a, b) {
  if (a < b) {
    let less = true;
    return (`a is larger then b ${less}`);
  } else {
    return false;
  }
}
// expression 
let compair = function (a, b) {
  if (a < b) {
    let less = true;
    return (`a is larger then b ${less}`);
  } else {
    return false;
  }
}
// Arrow 
let compair = (a, b) => {
  if (a < b) {
    let less = true;
    return (`a is larger then b ${less}`);
  } else {
    return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
// declaration 
function compair(a, b) {
  if (a == b) {
    let equal = true;
    return (`a and b are equal ${equal}`);
  } else {
    return false;
  }
}
// expression 
let compair = function (a, b) {
  if (a == b) {
    let equal = true;
    return (`a and b are equal ${equal}`);
  } else {
    return false;
  }
}
// Arrow 
let compair = (a, b) => {
  if (a == b) {
    let equal = true;
    return (`a and b are equal ${equal}`);
  } else {
    return false;
  }
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
// declaration 
function compair(x, y) {
  if (x > y) {
    return b;
  } else {
    return x;
  }
}
// expression
let compair = function (x, y) {
  if (x > y) {
    return b;
  } else {
    return x;
  }
}
// arrow 
let compair = (x, y) => {
  if (x > y) {
    return b;
  } else {
    return x;
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//  declaration 
function compair(x, y) {
  if (x < y) {
    return y;
  } else {
    return x;
  }
}
// expression 
let compair = function (x, y) {
  if (x < y) {
    return y;
  } else {
    return x;
  }
}

// Arrow 
let compair = (x, y) => {
  if (x < y) {
    return y;
  } else {
    return x;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

// declaration 
function checkEvn(n) {
  if (n % 2 == 0) {
    var evn = true;
    return (`${evn} n is even`)
  } else {
    return ("enter  the even number")
  }
}

// expression 
let checkEvn = function (n) {
  if (n % 2 == 0) {
    var evn = true;
    return (`${evn} n is even`)
  } else {
    return ("enter  the even number")
  }
}

// Arrow 
let checkEvn = (n) => {
  if (n % 2 == 0) {
    var evn = true;
    return (`${evn} n is even`)
  } else {
    return ("enter  the even number")
  }
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

// declaration
function checkOdd(n) {
  if (n % 2 !== 0) {
    var odd = true;
    return (`${odd} n is odd`)
  } else {
    return ("enter  the odd number")
  }
}

// expression 
let checkOdd = function (n) {
  if (n % 2 !== 0) {
    var odd = true;
    return (`${odd} n is odd`)
  } else {
    return ("enter  the odd number")
  }
}

// Arrow 
let checkOdd = (n) => {
  if (n % 2 !== 0) {
    var odd = true;
    return (`${odd} n is odd`)
  } else {
    return ("enter  the odd number")
  }
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function result(score, total) {
  var grade = total / 100;
  switch (true) {
    case (score > 90):
      return ('A');
    case (score > 80 && score <= 89):
      return ('B');
    case (score > 70 && score <= 79):
      return ('B');
    case (score > 60 && score <= 69):
      return ('B');
    case (score > 0 && score <= 59):
      return ('F');
    default:
      return ("enter valid mark")
  }
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function joinStr(word1, word2) {
  var concat = word1 + " " + word2;
  return concat;
}
