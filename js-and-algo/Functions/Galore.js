// ex1

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();      // first letter, capitalized
  capitalizedStr += str.slice(1);              // rest of the string
  return capitalizedStr;
}

// gets a string with several words and returns it with the first letter of each word capitalized
const capitalizeWords = function(str) {
  return str.split(" ").map(capitalize).join(" ");
};

// returns a description of the age according to rules
const getAge = function(age) {
  if (age < 21) return "Underage";
  if (age <= 55) return `${age} year old`;
  return "55+";
};

// capitalizes a profession string
const capitalizeProfession = function(profession) {
  return capitalizeWords(profession);
};

// returns a formatted location string: "City, Country"
const capitalizeLocation = function(city, country) {
  return `from ${capitalize(city)}, ${capitalize(country)}`;
};

// returns a formatted catchphrase string with quotes and capitalization
const capitalizeCatchphrase = function(name, catchphrase) {
  return `${capitalize(name)} loves to say "${capitalize(catchphrase)}".`;
};

// the main function that makes up the entire summary
const getSummary = function(person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += `${capitalizeProfession(person.profession)} `;
  summary += `${capitalizeLocation(person.city, person.country)}. `;
  summary += capitalizeCatchphrase(person.name, person.catchphrase);
  return summary;
};

// prints a summary for each person in the list
console.log("A summary for each person in the list");
for (const person of people_info) {
  console.log(getSummary(person));
}

// ex2
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

// removes special characters and lowercases it
const cleanText = function(sentence) {
  let cleaned = sentence.toLowerCase();
  for (const char of specialChars) {
    cleaned = cleaned.split(char).join("");
  }
  return cleaned.split(" "); // split into words
};

// adds one word to the counter object
const addToCounter = function(word) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
};

// main function
const countWords = function(sentence) {
  const words = cleanText(sentence);
  for (const word of words) {
    if (word !== "") { // skip empty strings
      addToCounter(word);
    }
  }
};

countWords(story);
console.log(wordCounts);
