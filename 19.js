// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// m - высота здания
// кубик внизу -                  n^3
// кубик выше него -          (n-1)^3
// самый последний кубик -        1^3


function findNb(m) {
    let volume = 0;
    for (let i = 0; volume < m; i++) {
        volume += Math.pow(i, 3);
        if (volume === m) {
            return i;
        }
    }    
    return -1;

    // let n = 0
    // while (m > 0) m -= ++n**3
    // return m ? -1 : n
}

console.log(findNb(1071225)) // 45
console.log(findNb(4183059834009)) // 2022
console.log(findNb(24723578342962)) // -1
console.log(findNb(135440716410000)) // 4824
console.log(findNb(40539911473216)) // 3568

