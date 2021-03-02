let arrNum = [1,2,3,4,5];
let arrNum2 = [-2, -1, 0, 1];

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;
    
    var totalSum = arr.reduce((sum, item) => {
        result.push(sum);
        return sum + item;
    });

    result.push(totalSum);
    return result;
}


console.log(getSums(arrNum)) // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
console.log(getSums(arrNum2)) // [-2, -1, 0, 1] = [-2, -3, -3, -2]