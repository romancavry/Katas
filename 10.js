/* Напишите алгоритм, который берет массив и перемещает все нули в конец, 
сохраняя порядок других элементов. */

const moveZeros = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1).push(0);
        }
    }
    return arr;
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,"a",0,0]