
let sumSquare = 0;
let tempSum = 0;
for (let i = 1; i <= 100; i++) {
  sumSquare += i * i;
  tempSum += i;
}
let sumSquareDifference = tempSum * tempSum - sumSquare;

console.log(sumSquareDifference);