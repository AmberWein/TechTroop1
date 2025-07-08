
// Checks if the given number is even or not
function isEven(num) {
  if (typeof num !== "number") return false;
  return (num % 2 === 0);
}

/*
 * Prints all odd numbers from a given array.
 * Uses the isEven function to determine if a number is odd.
 */
function printOddNumbers(nums) {
  for (const num of nums) {
    if(!isEven(num)) console.log(num)
  }
}

// Checks if a given number exists in an array of integers.
function isExists(nums, num){
  for (const n of nums) {
    if (n === num) return true;
  }
  return false;
}

console.log("isExists check: ")
console.log(isExists([1, 2, 3], 2)); // true
console.log(isExists([1, 2, 3], 5)); // false 


// Create a calculator object with add and subtract methods
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

const result1 = calculator.add(20, 1); // 21
const result2 = calculator.subtract(30, 9); // 21

console.log(calculator.add(result1, result2)); // 42

// Royal Converter: add a title and scale wealth by name length
function increaseByNameLength(money, name) {
  return money * name.length;
}

function makeRegal(name) {
  return "His Royal Highness, " + name;
}

const turnToKing = function(name, money){
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
}

console.log("Royal Converter: add a title and scale wealth by name length:");
turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

/*
 * Prints all 3-digit Armstrong numbers.
 * An Armstrong number is a number that is equal to the sum of its own digits
 * each raised to the power of the number of digits.
 */
function printThreeDigitArmstrongNumbers() {
  for (let num = 100; num <= 999; num++) {
    const digits = String(num).split('').map(Number); // convert to array of digits
    const power = digits.length;
    const sum = digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0);

    if (sum === num) {
      console.log(num);
    }
  }
}

console.log("Prints all 3-digit Armstrong numbers");
printThreeDigitArmstrongNumbers();