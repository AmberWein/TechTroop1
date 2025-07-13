const prompt = require("prompt-sync")({ sigint: true });

// Quiz Game
const questions = [
  { q: "What is 2 + 2? ", a: "4" },
  { q: "What is the capital of France? ", a: "Paris" },
  { q: "What year is it? ", a: new Date().getFullYear().toString() }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const answer = prompt(questions[i].q).trim();
  if (answer.toLowerCase() === questions[i].a.toLowerCase()) {
    score++;
  }
}

console.log(`Final Score: ${score}/${questions.length} correct!`);
