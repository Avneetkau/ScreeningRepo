function countMultiples(arr) {
  let result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }

  return result;
}

// as example
let input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let output = countMultiples(input);

console.log(output);
