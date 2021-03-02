/* Реализовать функцию iqTest, которая среди заданных чисел найдёт одно, 
отличающееся по чётности, и вернёт позицию (не индекс, а позицию по счету) этого 
числа из первоначальной строки. */

function iqTest(str) {
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (((arr[0] % 2) + (arr[1] % 2) + (arr[2] % 2)) <= 1) {
      if (arr[i] % 2 !== 0) {
        let idx = arr.indexOf(arr[i]);
        return idx + 1;
      }
    } else {
      if (arr[i] % 2 === 0) {
        let idx = arr.indexOf(arr[i]);
        return idx + 1;
      }
    }
  }
}

console.log(iqTest('2 4 7 8 10')); // 3  || 0 0 1 четный
console.log(iqTest('1 2 2')); // 1       || 1 0 0 четный
console.log(iqTest('1 3 5 2 9 7')); // 4 || 1 1 1 неч

// если больше 1 - нечётный ряд