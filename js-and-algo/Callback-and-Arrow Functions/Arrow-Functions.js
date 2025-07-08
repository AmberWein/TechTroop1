// ex4- an arrow function that accepts 3 parameters and returns their sum
const sum = (a, b, c) => a + b + c;

// ex5- an arrow function that performs a capitalize
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// ex6- arrow function to check weather and returns a matched sentence
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = (temp) => "It's " + determineWeather(temp);
