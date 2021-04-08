// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Для построения зашифрованной строки:
// Возьмите каждый второй символ из строки, затем другие символы, которые не являются каждым вторым символом, и объедините их как новую строку.
// Сделайте это n раз!

function encrypt(text, n) {
    if (n === 0 || n === -1 || text === null || text.length === 0) {
        return text;
    }

    let resultArr = [];
    for (let i = 0; i < text.length; i++) {
        resultArr.push(text[i + n]);
    }
    return resultArr.join();
}

function decrypt(encryptedText, n) {

}

// console.log(encrypt("This is a test!", 0)) // "This is a test!"
console.log(encrypt("This is a test!", 1)) // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)) // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)) // " Tah itse sits!"
// console.log(encrypt("This is a test!", 4)) // "This is a test!"
// console.log(encrypt("This is a test!", -1)) // "This is a test!"

// console.log(decrypt("This is a test!", 0)) // "This is a test!"
// console.log(decrypt("hsi  etTi sats!", 1)) // "This is a test!"
// console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!"
// console.log(decrypt(" Tah itse sits!", 3)) // "This is a test!"
// console.log(decrypt("This is a test!", 4)) // "This is a test!"
// console.log(decrypt("This is a test!", -1)) // "This is a test!"

// console.log(encrypt("", 0)) // ""
// console.log(decrypt("", 0)) // ""
// console.log(encrypt(null, 0)) // null
// console.log(decrypt(null, 0)) // null