const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    // check if the drink is on the menu
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    // check if there are enough beans to make the drink
    const requiredBeans = this.drinkRequirements[drinkType];
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans!");
      return;
    }
    // reduce the beans count and confirm the drink was made
    this.beans -= requiredBeans;
    console.log("Made a " + drinkType + "!");
  },

  // Extension 1
  money: 100, // Starting money

  buyBeans: function (numBeans) {
    const costPerBean = 3;
    const totalCost = numBeans * costPerBean;

    if (this.money < totalCost) {
      console.log("Not enough money to buy beans");
      return;
    }

    this.money -= totalCost;
    this.beans += numBeans;
    console.log("Bought " + numBeans + " beans");
  },

  // Extension 2
    drinkRequirementsNew: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },
  buyDrink: function (drinkType) {
    if (!this.drinkRequirementsNew.hasOwnProperty(drinkType)) {
      console.log("Sorry, we don't sell " + drinkType);
      return;
    }

    const { price } = this.drinkRequirementsNew[drinkType];
    this.money += price;
    this.makeDrink(drinkType);
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
