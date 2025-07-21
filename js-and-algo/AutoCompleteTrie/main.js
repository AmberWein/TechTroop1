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
  }
});
