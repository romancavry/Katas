// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    if (ending === '') { return true }

    let endingLength = ending.length;
    let strEnding = str.slice(-endingLength);

    return (strEnding === ending) ? true : false

    // return str.endsWith(ending);  - опять-таки не знал, что такое существует
}

console.log(solution('abc', 'bc')) // true
console.log(solution('abc', 'd')) // false
console.log(solution('abcde', 'cde')) // true
console.log(solution('abcde', 'abc')) // false
console.log(solution('abc', '')) // true
