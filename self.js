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

// write function that returns array with unique elements

const words = [
  "HTML",
  "CSS",
  "JS",
  "CSS",
  "JS",
  "Node.js",
  "React",
  "HTML",
  "JS",
  "CSS",
];

function unique(arr) {
  let uniqArray = [];

  for (let element of arr) {
    if (!uniqArray.includes(element)) {
      uniqArray.push(element);
    }
  }
  return uniqArray;
}
console.log(unique(words));

// Напишите функцию которая вычисляет квадратные корни для всех чисел у которых квадратный корень будет целым числом и возвращать массив корней этих чисел
// [4, 3, 5, 16, 16, 33, 4, 9] // [2, 4, 4, 2, 3]
function showSqr(arr) {
  const sqrArr = [];
  for (const element of arr) {
    const number = Math.sqrt(element);
    if (element % number === 0) {
      sqrArr.push(number);
    }
  }
  return sqrArr;
}
console.log(showSqr([4, 3, 5, 16, 16, 33, 4, 9]));

// function findLongestWord принимает произвольную строку, слова разделяет пробелом и возвращает самое длинное слово в этой строке

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("We are the champions my friend"));

