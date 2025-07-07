const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};

const letters = Object.keys(dictionary);

for (const letter of letters) {
  console.log(`Words that begin with  ${letter}:`);
  for (const word of dictionary[letter]) {
    console.log(`${word}`);
  }
}
