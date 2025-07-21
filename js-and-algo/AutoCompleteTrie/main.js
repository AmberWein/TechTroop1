const readline = require("readline");
const AutoCompleteTrie = require("./AutoCompleteTrie");

const trie = new AutoCompleteTrie();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands\n");

rl.prompt();