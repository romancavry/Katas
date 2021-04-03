// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd()

// Это ката предназначено для проверки вашей способности расширять функциональность встроенных классов. В этом случае мы хотим, чтобы вы расширили встроенный класс Array следующими методами: square (), cube (), average (), sum (), even () и odd ()

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers


Array.prototype.square = function() {
    return this.map((n) => {return Math.pow(n, 2)});
};

Array.prototype.cube = function () {
    return this.map((n) => {return Math.pow(n, 3)})
}

Array.prototype.average = function() {
    // let sum = this.reduce((a, b) => {
    //     return a + b;
    // })
    // return sum / this.length;
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result / this.length;
}

Array.prototype.sum = function() {
    // return this.reduce((a, b) => {
    //     return a + b;
    // })
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
}

Array.prototype.even = function() {
    let resultArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            resultArr.push(this[i]);
        }
    }
    return resultArr;
}

Array.prototype.odd = function() {
    let resultArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 !== 0) {
            resultArr.push(this[i]);
        }
    }
    return resultArr;
}

// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());// must return [1, 4, 9, 16, 25]
console.log(numbers.cube());  // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());   // must return 15
console.log(numbers.even());  // must return [2, 4]
console.log(numbers.odd());   // must return [1, 3, 5]