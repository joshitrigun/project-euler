// let memo = [0, 1];
// const fib = (n) => {
//   if (memo.length - 1 < n) {
//     memo[n] = fib(n - 1) + fib(n - 2);
//   }
//   return memo[n];
// }

// // creates array with elements from function that takes the index as argument while a given condition holds
// function takeWhile(fromFunc, cond, arr = []) {
//   let n = arr.length;
//   let val = fromFunc(n);
//   if (cond(val)) {
//     arr.push(val);
//     return takeWhile(fromFunc, cond, arr);
//   }
//   return arr;
// }

// let sum =
//   takeWhile(fib, n => n < 4000000)
//     .filter(n => n % 2 == 0)
//     .reduce((acc, c) => acc + c, 0);

// console.log(sum);

const fibo = n => {
  if (n < 2) {
    return n
  } return fibo(n - 1) + fibo(n - 2)
}

const takeWhile = (fromFunc, cond, arr = []) => {
  let n = arr.length;
  let val = fromFunc(n);
  if (cond(val)) {
    arr.push(val);
    return takeWhile(fromFunc, cond, arr)
  }
  console.log(arr);
  return arr;
}

let sum = takeWhile
  (
    fibo,
    n => n < 4000000
  )
  .filter(n => n % 2 === 0)
  .reduce((acc, c) => acc + c, 0)

console.log(sum)