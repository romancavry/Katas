/* Реализовать функцию getRandomArr так, чтобы она возвращала массив  элементов, заполненный случайными натуральными числами от 1 до 200, так, чтобы они не повторялись */

function getRandomArr() {
    let startNumber = 1;
    let endNumber = 200;
    let resultArr = [];
    let range = (endNumber - startNumber) + 1;
  
    for (let i = 0; i < range; i++) {
      let randomNumber = Math.round(Math.random() * range);
      if (resultArr.indexOf(randomNumber) != -1) {
        resultArr.push(Math.round(Math.random() * range));
      } else {
        resultArr.push(randomNumber);
      }
    }
    return resultArr;
  }
  
  console.log(getRandomArr());