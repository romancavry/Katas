// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666..

function zero() {
	return arguments.length ? arguments[0](0) : 0;
}
function one() {
	return arguments.length ? arguments[0](1) : 1;
}
function two() {
  return arguments.length ? arguments[0](2) : 2;
}
function three() {
	return arguments.length ? arguments[0](3) : 3;
}
function four() {
	return arguments.length ? arguments[0](4) : 4;
}
  function five() {
	return arguments.length ? arguments[0](5) : 5;
  }
  function six() {
	return arguments.length ? arguments[0](6) : 6;
  }
  function seven() {
	return arguments.length ? arguments[0](7) : 7;
  }
  function eight() {
	return arguments.length ? arguments[0](8) : 8;}
function nine() {
  return arguments.length ? arguments[0](9) : 9;
}

function plus(b) {
  return function(a) { return Math.floor(a + b) }
}
function minus(b) {
  return function(a) { return Math.floor(a - b) }
}
function times(b) {
  return function(a) { return Math.floor(a * b) }
}
function dividedBy(b) {
  return function(a) { return Math.floor(a / b) }
}



function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function(y) {
		return y / x;
	}
}

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3