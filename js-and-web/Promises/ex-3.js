// promise-based checkout flow that simulates async operations like inventory checks, total price calculation, payment processing, and inventory updates

const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const unavailable = items.find(item => !inventory[item] || inventory[item].stock === 0);
      if (unavailable) {
        reject(new Error(`Item out of stock: ${unavailable}`));
      } else {
        resolve(items.map(item => ({
          name: item,
          price: inventory[item].price
        })));
      }
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + item.price, 0);
      const tax = +(subtotal * 0.08).toFixed(2);
      const total = +(subtotal + tax).toFixed(2);
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({
          transactionId: Math.floor(Math.random() * 1000000),
          amount,
          status: 'success'
        });
      } else {
        reject(new Error('Payment processing failed'));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach(item => {
        inventory[item.name].stock -= 1;
      });
      resolve('Inventory updated');
    }, 300);
  });
}

function checkout(itemNames) {
  console.log('\nStarting checkout:', itemNames);
  return checkInventory(itemNames)
    .then(availableItems => {
      return calculateTotal(availableItems).then(prices => {
        return processPayment(prices.total).then(payment => {
          return updateInventory(availableItems).then(() => {
            return {
              items: availableItems.map(i => i.name),
              prices,
              payment
            };
          });
        });
      });
    })
    .catch(err => {
      throw err;
    });
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));