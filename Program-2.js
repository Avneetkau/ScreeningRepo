function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}
//as example
let a = 5;
console.log("Output:", generateOddSeries(a));
