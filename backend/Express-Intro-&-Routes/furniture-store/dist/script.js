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