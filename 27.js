// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.
// Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только действительные последовательные числа.

function order(words){
  let sorted = 
    words.split(' ')
    .sort((a,b) => a.match(/\d/) -  b.match(/\d/))
    .join(' ')

  return sorted;
}  

// можно извлечь цифру из строки (str.substr) -> сложить

console.log(order("is2 Thi1s T4est 3a")) //  "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // ""
