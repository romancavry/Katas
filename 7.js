/* В функцию findIndex передается число и отсортированный по возрастанию массив.
Функция должна вернуть сумму двух индексов массива, элементы которых в сумме
дают число переданное первым аргументом. */

function findIndexSum(val, arr) {
    let aIndex = 0;
    let bIndex = arr.length - 1;
    let a;
    let b;

    for (let i = 0; i < arr.length; i++) {
        a = arr[aIndex];
        b = arr[bIndex];

        a + b > val ? bIndex-- : aIndex++
        if (a + b === val) return arr.indexOf(a) + arr.indexOf(b)
    }
    return -1;
}

const arr = [2, 5, 8, 9, 22, 57, 94, 100, 127, 198, 345, 451];
console.log('Длина строки: ' + arr.length);
console.log(findIndexSum(79, arr)); // 4 + 5 -> 9
console.log(findIndexSum(70, arr)); // -1