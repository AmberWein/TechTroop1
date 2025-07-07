// Multiple Condition Validator

let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

// check individual conditions
let isUsernameValid = usernameLength >= 5;
let isPasswordValid = passwordLength >= 8;
let isAgeValid = userAge >= 13;

// check if all conditions are met
let canCreateAccount = isUsernameValid && isPasswordValid && isAgeValid;

// display specific error messages or success
if (!isUsernameValid) {
    console.log("Error: Username must be at least 5 characters long");
}

if (!isPasswordValid) {
    console.log("Error: Password must be at least 8 characters long");
}

if (!isAgeValid) {
    console.log("Error: User must be 13 or older");
}

if (canCreateAccount) {
    console.log("Success: Account can be created!");
} else {
    console.log("Account creation failed. Please fix the errors above.");
}