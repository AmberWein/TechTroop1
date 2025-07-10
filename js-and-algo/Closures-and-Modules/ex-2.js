function Bank() {
  let money = 500; // private variable

  return {
    // deposite money
    deposit: function(cash) {
      money += cash;
    },
    
    // show current balance
    showBalance: function() {
      console.log(money);
    }
  };
}

// Example usage
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); // Should print 950
