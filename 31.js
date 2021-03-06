// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Он должен найти два разных элемента в массиве, которые при сложении дают целевое значение. Затем индексы этих элементов должны быть возвращены в виде кортежа, например: (index1, index2).
// Для целей этого ката некоторые тесты могут иметь несколько ответов; любые действующие решения будут приняты.
// Ввод всегда будет действительным (числа будут массивом длиной 2 или больше, и все элементы будут числами; цель всегда будет суммой двух разных элементов из этого массива).

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

console.log(twoSum([1, 2, 3], 4)) // [0, 2] ---> вернёт индексы чисел сложение которых даст 4
console.log(twoSum([1234,5678,9012], 14690)) // [1, 2]
console.log(twoSum([945, 601, 139, 460, 182, 772, 981, 518, 481, 82], 264)) // [4, 9]
console.log(twoSum([1, 3, 2, 4, 0, 10], 7)) // [1, 3]
