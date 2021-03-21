/*
Прислал Den Pol, задача с реального собеса.

Дан массив строк arr.
Требуется написать функцию, которая принимает произвольную строку.
Функция должна проверить, существует ли как минимум два значения в
массиве, которые являются анаграммами к переданной в функцию строке,
если такие строки существуют, тогда функция должна вернуть первую
встретившуюся в массиве строку-анаграмму.
В случае если анаграмм в массиве менее 2, необходимо вернуть null.
*/
const arr = ['asfd', 'asd', 'dsa', '1nkil', 'asd', 'fhk', 'lfd', 'link', 'link1'];

const getFirstAnagram = (str) => {
    let lettersArray = str.split('');
    let temp = 0;
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        let arrElementLettersArray = arr[i].split('');
        for (let j = 0; j < lettersArray.length; j++) {
            if (lettersArray.indexOf(arrElementLettersArray[j]) !== -1 && arrElementLettersArray.length === lettersArray.length) {
                temp++;
                indexes.push(arr.indexOf(arr[i]));
            } 
        }
    }
    return (temp < str.length * 2) ? null : arr[indexes[0]];
};

console.log(getFirstAnagram('asd')); // "asd"
console.log(getFirstAnagram('link')); // null
console.log(getFirstAnagram('link1')); // "1nkil"