//Task 1
function countOccurrences(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new TypeError("argument must be an array");
    }
    const counts = {};
    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1;
    }
    return counts;
  } catch (error) {
    return error.name + ": " + error.message;
  }
}
const items = ["apple", "banana", "apple", "orange", "banana", "banana"];
const result = countOccurrences(items);
// Results Task 1
console.log(result);
// Expected Output: Map(3) { 'apple' => 2, 'banana' => 3, 'orange' => 1 }
console.log("----------------------------------------------------")

//Task 2
function multiply(...numbers) {
  if (numbers.every((num) => typeof num === "number")) {
    const array = numbers.reduce((acc, item) => {
      return acc.includes(item) ? acc : [...acc, item];
    }, []);
    return array.reduce((acc, item) => acc * item, 1);
  }
}

// Way 2
// function multiply(...numbers) {
//     const array = [...new Set(numbers)];
//     return array.reduce((acc, item) => acc * item, 1);
//   }

// Results Task 2
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3, 2, 4)); // 24
console.log(multiply(5, 5, 5, 5, 1)); // 5
console.log(multiply(7, 7, 2)); // 14

//Task 3
function getElement(array, index) {
  try {
    if (!Array.isArray(array)) {
      throw new TypeError("First argument must be an array");
    }
    if (typeof index !== "number" || isNaN(index)) {
      throw new TypeError("Second argument must be a number");
    }
    if (index < 0 || index >= array.length) {
      throw new RangeError("Index out of bounds");
    }
    return array[index];
  } catch (error) {
    return error.name + ": " + error.message;
  }
}
let arr = [1, 2, 3, 4, 5];

// Results Task 3

console.log(getElement(arr, 2)); // 3
console.log(getElement(arr, 10)); // RangeError: Index out of bounds
console.log(getElement(arr, "two")); // TypeError: Second argument must be a number
console.log(getElement("not an array", 2)); // TypeError: First argument must be an array
