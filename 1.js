
/* Необходимо реализовать функцию accum, которая принимает строку, а возвращает
другую строку, как показано в примерах.

аккумулятор ("abcd") -> "A-Bb-Ccc-Dddd"
аккумулятор ("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
аккумулятор ("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр аккумулятора - это строка, которая включает только буквы от a..z и A..Z. */

function accum(str) {
    let strUpperCase = str.toUpperCase();
    let arr = strUpperCase.split('');
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
      let idx = arr.indexOf(arr[i]);
      if (idx === 0) {
        resultArray.push(arr[0]);
      } else {
        let toSum = arr[i].repeat(idx);
        let ToSumLowerCase = toSum.toLowerCase();
        resultArray.push(arr[i] + ToSumLowerCase);
      }
    }
    return resultArray;
  }
  
  console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
  console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"