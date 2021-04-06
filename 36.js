// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.

var uniqueInOrder=function(iterable){
//     if (typeof iterable !== 'string') {iterable = iterable.join('')}
//     iterable = iterable.split(/(.)\1+/g).join('').split('');

//     if (!isNaN(Number(iterable[0]))) {
//         iterable = iterable.map((e) => {
//             return e = Number(e);
//         })
//     }

// (.): Совпадение с любым персонажем и захват в группе # 1
// \1+: Совпадение символов 1+ такое же, как в группе захвата # 1

//     return iterable;

    let result = [];
    let last;

    for (let i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push(last = it[i]);
        }
    }

    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  // ['A','B','C','D','A','B']
// console.log(uniqueInOrder('ABBCcAD'))          // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]))        // [1,2,3]