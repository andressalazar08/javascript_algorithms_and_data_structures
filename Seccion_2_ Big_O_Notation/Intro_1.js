/* 
Write a function that calculates the sum of all numbers from 1 up to
(and including) some number n as input.

*/

function addUpTo(n){
    let total=0;
    for (let i=1; i<=n; i++){
        total +=i;
    }
    return total;
}

console.log(addUpTo(6));
console.log(addUpTo(5));