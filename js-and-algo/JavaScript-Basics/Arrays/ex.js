const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log("Original array: ", numbers);

// Step 1: delete the second and third elements
numbers.splice(1, 2);
console.log("After step 1: ", numbers);

// Step 2: change the fourth element to 1
numbers[3] = 1;
console.log("After step 2: ", numbers);

// Step 3: delete the last 4 elements
numbers.splice(-4); // remove last 4 elements
console.log("After step 3: ", numbers);

// Step 4: add another element 0 to the beginning of the array
numbers.unshift(0);
console.log("After step 4:", numbers);

// Step 5: print the modified array
console.log("\nFinal modified array:", numbers);