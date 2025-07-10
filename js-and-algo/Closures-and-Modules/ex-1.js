function StringFormatter() {
  return {
    // capitalizes the first letter of the string and makes the rest lowercase
    capitalizeFirst: function(str) {
      if (!str) return "";
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },
    
    // replaces all spaces in the string with dashes
    toSkewerCase: function(str) {
      return str.replace(/\s+/g, "-"); // Use regex to replace one or more spaces
    //   return str.split(" ").join("-"); // assuming only one space between words
    }
  };
}

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); // Output: Dorothy
console.log(formatter.toSkewerCase("blue box"));   // Output: blue-box