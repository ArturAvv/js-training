// find smallest number
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
function findSmallerNumber() {
  let smallNumber = numbers[0];
  for (let number of numbers) {
    if (smallNumber < number) {
      return smallNumber;
    }
  }
}
console.log(findSmallerNumber(numbers));
