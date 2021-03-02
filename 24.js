// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let resultString = '';
    for (let i = 0; i < string.length; i++) {
        string[i].toUpperCase() === string[i] ? resultString += ` ${string[i]}` : resultString += string[i];
    }
    return resultString;
}

console.log(solution('camelCasing')) //'camel Casing'
console.log(solution('camelCasingTest')) //'camel Casing Test'