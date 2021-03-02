/* Завершите решение так, чтобы оно разбило строку на пары из двух символов.
Если строка содержит нечетное количество символов, она должна заменить
отсутствующий второй символ последней пары символом подчеркивания ('_').
*/

function solution(str) {
    let matchResult = str.match(/.{1,2}/g);
    if (str.length % 2 === 0) {
        return matchResult;
    } else {
        let lastArrElement = matchResult.length - 1;
        let x = matchResult[lastArrElement]; // f
        matchResult.pop(matchResult[lastArrElement]);
        matchResult.push(x + '_');
        return matchResult;
    }
}

console.log(solution('asdfj1239vsFF'))
console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']