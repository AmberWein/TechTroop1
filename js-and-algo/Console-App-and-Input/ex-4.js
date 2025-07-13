const prompt = require("prompt-sync")({ sigint: true });

let balance = 100;

while (true) {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");

  const choice = prompt("Choose option (1-4): ").trim();

  if (!["1", "2", "3", "4"].includes(choice)) {
    console.log("Invalid option, please enter 1, 2, 3, or 4.");
    continue;
  }

  if (choice === "1") {
    console.log(`Current balance: $${balance}`);
  }

  else if (choice === "2") {
    const amount = parseFloat(prompt("Enter amount to deposit: $"));
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid number");
    } else {
      balance += amount;
      console.log(`New balance: $${balance}`);
    }
  }

  else if (choice === "3") {
    const amount = parseFloat(prompt("Enter amount to withdraw: $"));
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid number");
    } else if (amount > balance) {
      console.log("Cannot withdraw that amount.");
    } else {
      balance -= amount;
      console.log(`New balance: $${balance}`);
    }
  }

  else if (choice === "4") {
    console.log("Thank you for using the banking system, goodbye!");
    break;
  }
}