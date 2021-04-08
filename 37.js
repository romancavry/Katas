// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w[A-Za-z0-9]{6,}/g.test(password); 

    // return  /^[A-Za-z0-9]{6,}$/.test(password) &&
    //         /[A-Z]+/           .test(password) &&
    //         /[a-z]+/           .test(password) &&
    //         /[0-9]+/           .test(password) ;
}

console.log(validate('djI38D55')) // true
console.log(validate('a2.d412')) // false
console.log(validate('JHD5FJ53')) // false
console.log(validate('!fdjn345')) // false
console.log(validate('jfkdfj3j')) // false
console.log(validate('123')) // false
console.log(validate('asdtadv@fsvdf.vDE6')) // true
console.log(validate('Password123')) // true