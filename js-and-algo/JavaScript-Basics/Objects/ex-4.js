const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose true or fals
  fridge: {
    price: 500,
    works: false, // choose true or false
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;
const fixCost = fridgePrice / 2;

const radish = kitchen.fridge.items.find(item => item.name === "radish");
const daysExpired = date - radish.expiryDate;
const expiredText = `${kitchen.owner}'s ${radish.name} expired ${daysExpired} day${daysExpired !== 1 ? 's' : ''} ago.`;

// building the message
let reason = '';
if (fridgeWorks) {
  reason = `Weird, considering her fridge works.`;
} else {
  reason = `Probably because her fridge doesn't work.`;
}

let ovenComment = hasOven
  ? `Luckily, she has an oven to cook the ${radish.name} in.`
  : `Too bad she doesn't have an oven to cook the ${radish.name} in.`;

let fixFridgeComment = fridgeWorks ? '' : ` And she'll have to pay ${fixCost} to fix the fridge.`;

// final output
console.log(`${expiredText} ${reason} ${ovenComment}${fixFridgeComment}`);
