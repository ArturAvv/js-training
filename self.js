// find smallest number

const numbers = [15, 2, 5, 35, 56, 1, 12, 24, -7, 80, 3];
function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    let smallNumber = numbers[0];

    for (let number of numbers) {
      if (smallNumber > number) {
        smallNumber = number;
      }
    }

    return smallNumber;
  }
  return `Not an array`;
}
console.log(findSmallerNumber(numbers));

// write function that returns array with uniq elements

const words = ["HTML", "CSS", "JS", "CSS", "JS"]
