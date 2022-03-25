let count = 1, num = 20;

while (count < 20) {
  for (let i = 1; i <= 20; i++) {
    if (num % i == 0) {
      count++;
    }
    else {
      count = 0;
      break;
    }
  }
  if (count == 20) {
    console.log(num);
    break;
  }
  else {
    num = num + 20;
  }
}

// let count = 0, num = 1;

// while (count < 20) {
//   for (let i = 1; i <= 20; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//     else {
//       count = 0;
//       break;
//     }
//   }
//   if (count == 20) {
//     console.log(num);
//     break;
//   }
//   else {
//     num++;
//   }
// }