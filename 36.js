// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.

var uniqueInOrder=function(iterable){
    let resultArr = [];

    for (let i = 0; i < iterable.length; i++) {
        if (!resultArr.includes(iterable[i])) {
            resultArr.push(iterable[i])
        }
    }
    return resultArr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  // ['A','B','C','D','A','B']
// console.log(uniqueInOrder('ABBCcAD'))          // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]))        // [1,2,3]