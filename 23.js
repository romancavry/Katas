// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

// If a value is present in b, all of its occurrences must be removed from the other:


// Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого и возвращает результат.

// Он должен удалить все значения из списка a, которые присутствуют в списке b.
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:

function arrayDiff(a, b) {
  let resultArr = [];
  let temp;
  for (let i = 0; i < a.length; i++) {
    temp = a[i];
    if (b.indexOf(temp) === -1) {
        resultArr.push(temp);
    }
  }
  return resultArr;

  // return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2],[1])) // [2]
console.log(arrayDiff([1,2,2,2,3],[2])) // [1,3]
console.log(arrayDiff([], [4,5])) // []
console.log(arrayDiff([3,4], [3])) // [4]
console.log(arrayDiff([1,8,2], [])) // [1,8,2]