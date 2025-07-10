/*
Exercises

1. Answer: O(n) - because each of the n elements is visited exactly once.
2. Answer: O(log(n)) - the loop starts with i = 1 and multiplies i by 2 in each iteration, therfore the number of iterations is approximately log₂(n).
In each iteration, one console.log() is called, which is considered O(1) time.
3. Answer: O(1) - performs a constant number of arithmetic operations (each is O(1)) and Math.sqrt() (also O(1)).
4. Answer: O(m * n)- m = number of students, n = number of questions per student.
Iterates over m students, and for each student, over n questions, performing constant-time operations per answer.
5. Answer: O(n)- n = number of recipients.
6. Answer: find Duplicates in an Array (O(n) Solution with Set)
*/
function findDuplicates(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      console.log("there is a duplicate");
      return;
    }
    seen.add(num);
  }

  console.log("no duplicates found");
}

/*
7. Store employee data in a way that allows retrieving an employee’s salary by their ID in constant time, O(1)
*/
// use a hash map
const employees = {
  ax01: { name: "Ray", age: 28, salary: 1300 },
  qs84: { name: "Lucius", age: 31, salary: 840 },
  bg33: { name: "Taylor", age: 18, salary: 2700 },
};

function findEmployeeSalary(employeeID) {
  const employee = employees[employeeID];
  if (employee) {
    return employee.salary;
  } else {
    return null;
  }
}

/*
8. Binary search
*/

function findIndex(numbers, num) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === num) {
      return mid; // found the number
    } else if (numbers[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // number not found
}

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987];

console.log(findIndex(numbers, 2630)); // Output: 86


/*
9. Answer: red graph- O(n^2), blue graph- O(n), yellow graph- O(logn), green graph- O(1)
*/


