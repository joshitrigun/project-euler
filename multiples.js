total_sum = 0
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {

    total_sum = total_sum + i
  }

}
console.log(total_sum)