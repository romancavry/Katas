// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let x = str.toLowerCase();
    for (let i = 0; i < x.length; i++) {
        if (x.indexOf(x[i]) !== x.lastIndexOf(x[i])) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false