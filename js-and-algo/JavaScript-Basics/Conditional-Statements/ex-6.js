// Leap Year Calculator

let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap

let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        // Year is divisible by 4 but not by 100
        isLeapYear = true;
    }
} else {
    // Year is not divisible by 4
    isLeapYear = false;
}

console.log("LEAP YEAR CALCULATOR");
console.log(`Year: ${year}`);
console.log(`Is leap year: ${isLeapYear}`);