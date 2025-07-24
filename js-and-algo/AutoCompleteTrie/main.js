// const readline = require("readline");
// const AutoCompleteTrie = require("./AutoCompleteTrie");

// const trie = new AutoCompleteTrie();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "> ",
// });

// console.log("=== AutoComplete Trie Console ===");
// console.log("Type 'help' for commands\n");

// rl.prompt();

// rl.on("line", (line) => {
//   const input = line.trim();
//   const [command, ...args] = input.split(" ");

//   switch (command) {
//     case "add":
//       if (args.length === 0) {
//         console.log("✗ Please provide a word to add");
//       } else {
//         const word = args[0];
//         trie.addWord(word);
//         console.log(`✓ Added '${word}' to dictionary`);
//       }
//       break;

//     case "find":
//       if (args.length === 0) {
//         console.log("✗ Please provide a word to find");
//       } else {
//         const word = args[0];
//         const found = trie.findWord(word);
//         if (found) {
//           console.log(`✓ '${word}' exists in dictionary`);
//         } else {
//           console.log(`✗ '${word}' not found in dictionary`);
//         }
//       }
//       break;

//     case "complete":
//       if (args.length === 0) {
//         console.log("✗ Please provide a prefix");
//       } else {
//         const prefix = args[0];
//         const suggestions = trie.predictWords(prefix);
//         if (suggestions.length) {
//           console.log(`Suggestions for '${prefix}': ${suggestions.join(", ")}`);
//         } else {
//           console.log(`✗ No suggestions found for '${prefix}'`);
//         }
//       }
//       break;

//     case "help":
//       console.log("Commands:");
//       console.log("  add <word>        - Add word to dictionary");
//       console.log("  find <word>       - Check if word exists");
//       console.log("  complete <prefix> - Get completions");
//       console.log("  help              - Show this message");
//       console.log("  exit              - Quit program");
//       break;

//     case "exit":
//       console.log("Goodbye!");
//       rl.close();
//       break;

//     default:
//       console.log(`✗ Unknown command: ${command}. Type 'help' for options`);
//   }
//   rl.prompt();
// });

const trie = new AutoCompleteTrie();

const addInput = document.getElementById("add");
const addButton = document.getElementById("addButton");
const autocompleteInput = document.getElementById("autocomplete");
const suggestionsList = document.getElementById("suggestions");
const statusMessage = document.getElementById("wordsCount");

function updateWordCount() {
  const count = trie.countWords();
  statusMessage.textContent = `${count}`;
}

updateWordCount();

addButton.addEventListener("click", () => {
  const word = addInput.value.trim();
  const addStatusMessage = document.getElementById("addStatusMessage");

  addStatusMessage.classList.remove("error");
  addStatusMessage.style.display = "none";

  if (word === "") {
    addStatusMessage.textContent = `✗ cannot add empty word`;
    addStatusMessage.classList.add("error");
    addStatusMessage.style.display = "block";
    addInput.value = "";
    return;
  }
  if (trie.findWord(word)) {
    addStatusMessage.textContent = `✗ '${word}' already exists in dictionary`;
    addStatusMessage.classList.add("error");
    addStatusMessage.style.display = "block";
    return;
  }
  trie.addWord(word);
  addStatusMessage.textContent = `✓ Added '${word}' to dictionary`;
  addStatusMessage.style.display = "block";
  addInput.value = "";

  updateWordCount();
});

autocompleteInput.addEventListener("input", () => {
  const prefix = autocompleteInput.value.trim();
  suggestionsList.innerHTML = "";

  if (prefix === "") {
    suggestionsList.style.display = "none";
  }

  suggestionsList.style.display = "block";
  const suggestions = trie.predictWords(prefix);
  suggestions.forEach((word) => {
    const li = document.createElement("li");

    const prefixRegex = new RegExp(`^(${prefix})`, "i");
    const highlightedWord = word.replace(prefixRegex, '<strong style="background-color: #feeeee;">$1</strong>');

    li.innerHTML = highlightedWord;
    suggestionsList.appendChild(li);
  });
});
