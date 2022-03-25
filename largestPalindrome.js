// function largestPalindrome() {

//   let max = 0;

//   // not using i >= 100 since 100*100 is not palindrome! :)
//   for (let i = 999; i > 100; i--) {
//     // because i * j === j * i, no need of both i and j
//     // to count down from 999
//     for (let j = i; j > 100; j--) {
//       let mul = j * i;
//       if (isPalin(mul) && mul > max) {
//         max = i * j;
//       }
//     }
//   }

//   return max;

// }

// function isPalin(i) {

//   // adding empty string to i instead using of .toString
//   // avoids unnecessary wrapping in String object on the left side
//   i = '' + i;

//   // don't rely on ==,  use === instead
//   return i === i.split("").reverse().join("");

// }

// console.log(largestPalindrome())


function largestPalindrome() {

  let arr = [];
  for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
      let mul = j * i;
      if (isPalin(mul)) {
        arr.push(j * i);
      }
    }
  }

  return Math.max.apply(Math, arr);
}

function isPalin(i) {
  return i.toString() == i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());