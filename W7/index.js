//Task 1
const numbers = [5, 8, 130, 44, 18, 105];
//Task 1-1 : Sorting
const sortNumbers = [...numbers].sort((a, b) => a - b);
//Task 1-2 : Array < 30
const newNumbers = numbers.filter((item) => item < 30);
//Task 1-3 : SUM of Array Itmes
const sumOfNumbers = numbers.reduce((sum, item) => sum + item, 0);
//Task 1-4 : Array To String
const stringNumbers = numbers.map((value) => value.toString());
//Task 1-5 : Array - index
const numberMinusIndex = numbers.map((value, index) => value - index);

// Results Task 1
console.log(numbers);
console.log(sortNumbers);
console.log(newNumbers);
console.log(`SUM of Array Itmes is ${sumOfNumbers}`);
console.log(stringNumbers);
console.log(numberMinusIndex);
console.log("-------------------");

//Task 2
const getWeekday = function (date) {
  if (isNaN(date.getTime())) return "Invalid Date";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};

// Results Task 2
console.log(getWeekday(new Date())); // "Sunday”
console.log(getWeekday(new Date("2000-07-24"))); // 'wednesday'
console.log("-------------------");

//Task 3
const getRandomInt = function (min, max) {
  if (min > max) [min, max] = [max, min];
  return min + Math.floor(Math.random() * (max - min + 1));
};

// Results Task 3
console.log(`your random number is ${getRandomInt(1, 10)}`); // Random integer between 1 and 10
console.log("-------------------");

//Task VIP
function kebabToPascalCase(sentence) {
  if (!sentence) return ""; // Change 1 is here check for empty string
  const words = sentence.split(" ");
  const transformedWords = words.map((word) => {
    if (word.indexOf("-") >= 0) {
      // Change 2 is here startsWith -> indexOf
      const parts = word.split("-");
      const pascalCaseWord = parts
        .filter(Boolean) // Change 3 is here check for multy "-"
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
      return pascalCaseWord;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1); // Change 4 is here word -> word.charAt(0).toUpperCase() + word.slice(1)
    }
  });
  return transformedWords.join(" ");
}

// Results Task VIP
const sentence = "My Love is bahare-salehi for-ever";
const result = kebabToPascalCase(sentence);
console.log(result); // Expected to be: "Convert KebabCase To PascalCase"
