let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

// fix the arrays
meatArr = [...meatArr, "rabbit"];
vegetableArr = vegetableArr.filter(item => item !== "rabbit");

