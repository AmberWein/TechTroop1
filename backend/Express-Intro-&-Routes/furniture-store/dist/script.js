document.getElementById("checkPriceBtn").addEventListener("click", async () => {
  const itemName = document.getElementById("itemInput").value.trim();

  if (!itemName) {
    document.getElementById("result").textContent = "Please enter an item name.";
    return;
  }

  try {
    const response = await fetch(`/priceCheck/${itemName}`);
    const data = await response.json();

    if (data.price !== null) {
      document.getElementById("result").textContent = `Price: $${data.price}`;
    } else {
      document.getElementById("result").textContent = "Item not found.";
    }
  } catch (err) {
    console.error("Error:", err);
    document.getElementById("result").textContent = "Something went wrong.";
  }
});

// buy item
document.getElementById("buyBtn").addEventListener("click", async () => {
  const itemName = document.getElementById("buyInput").value.trim();

  if (!itemName) {
    document.getElementById("buyResult").textContent = "Please enter an item name.";
    return;
  }

  try {
    const response = await fetch(`/buy/${itemName}`);
    const data = await response.json();

    if (data.error) {
      document.getElementById("buyResult").textContent = "Item not found.";
    } else if (data.message) {
      document.getElementById("buyResult").textContent = data.message;
    } else {
      document.getElementById("buyResult").textContent =
        `Congratulations, you've just bought ${data.name} for $${data.price}. ` +
        `There are ${data.inventory} left now in the store.`;
    }
  } catch (err) {
    console.error("Error:", err);
    document.getElementById("buyResult").textContent = "Something went wrong.";
  }
});