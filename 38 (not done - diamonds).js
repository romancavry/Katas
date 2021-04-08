// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// A size 3 diamond:    ---- " *\n***\n *\n"

//  *
// ***
//  *

// A size 5 diamond:    ---- "  *\n ***\n*****\n ***\n  *\n"

//   *
//  ***
// *****
//  ***
//   *


function diamond(n){
    if (n % 2 === 0 || n <= 0) return null; 

    let length = n;
    let diam = '';
    let section = '*\n';
    let star = '*';

    for (let i = 0; i < n; i++) {
        length = 1;
        diam += 
    }

    return diam;
}

// console.log(diamond(1)) // "*\n"
// console.log(diamond(3)) // " *\n***\n *\n")
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"
// console.log(diamond(2), null)
// console.log(diamond(-3), null)
// console.log(diamond(0), null)