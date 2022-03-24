// let divisor = 2;
// let number = 600851475143;
// while (number > 1) {
//   if (number % divisor === 0) {
//     number /= divisor;
//   } else {
//     divisor++;
//   }
// }
// console.log(divisor); 

function solution(n) {

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      n /= i;
    }
  }
  return n;
}
let res = solution(600851475143);
console.log(res);