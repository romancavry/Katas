// Функция должна вывести числа из массива, которые начинаются на цифру, переданную в второй аргумент. Результат - массив чисел.

function doSmth (arr, number) {
  let tempArr = [];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(String(arr[i]));
  }

  for (let i = 0; i < arr.length; i++) {
    if (tempArr[i][0] == number) {
      resultArr.push(arr[i]);
    }
  }

  if (resultArr.length === 0) {
    return -1
  }
  return resultArr;
}

console.log(doSmth([0,100,24,2,1,11,1,432,0], 1)) // [100,1,11,1]
console.log(doSmth([3,1,23,2323,41,3,0], 3)) // [3,3]
console.log(doSmth([1,1,1,1,1], 2)) // 2