// function to swap elements between two stacks using recursion
function swap(stack1, stack2) {
    // base case: stack is empty
    if (stack1.length === 0) return;

    const element = stack1.pop(); 
    swap(stack1, stack2);
    stack2.push(element);
}

// Test
const arr1 = [1, 2, 3];
const arr2 = [];

swap(arr1, arr2);

console.log(arr1); // []
console.log(arr2); // [1, 2, 3]
