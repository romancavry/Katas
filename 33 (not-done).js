// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    string = string.replace(/\s/g, '').toLowerCase();
    if (string.includes('.')) {string = string.slice(0, -1)}

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (string.includes(alphabet[j])) {
                let temp = alphabet.
            }
        }
    }

    // for (let i = 0; i < string.length; i++) {
    //     if ((string.indexOf(alphabet[i]) === string.lastIndexOf(alphabet[i]))) {
    //         return false
    //     }
    // }
    // return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram('This is not a pangram.')) // false