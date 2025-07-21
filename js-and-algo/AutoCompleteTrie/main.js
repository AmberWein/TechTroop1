const readline = require("readline");
const AutoCompleteTrie = require("./AutoCompleteTrie");

const trie = new AutoCompleteTrie();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands\n");

rl.prompt();

rl.on("line", (line) => {
  const input = line.trim();
  const [command, ...args] = input.split(" ");

  switch (command) {
    case "add":
      if (args.length === 0) {
        console.log("✗ Please provide a word to add");
      } else {
        const word = args[0];
        trie.addWord(word);
        console.log(`✓ Added '${word}' to dictionary`);
      }
      break;

    case "find":
      if (args.length === 0) {
        console.log("✗ Please provide a word to find");
      } else {
        const word = args[0];
        const found = trie.findWord(word);
        if (found) {
          console.log(`✓ '${word}' exists in dictionary`);
        } else {
          console.log(`✗ '${word}' not found in dictionary`);
        }
      }
      break;

    case "complete":
      if (args.length === 0) {
        console.log("✗ Please provide a prefix");
      } else {
        const prefix = args[0];
        const suggestions = trie.predictWords(prefix);
        if (suggestions.length) {
          console.log(`Suggestions for '${prefix}': ${suggestions.join(", ")}`);
        } else {
          console.log(`✗ No suggestions found for '${prefix}'`);
        }
      }
      break;
  }
});
