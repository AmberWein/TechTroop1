//Complex Business Logic

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

// calculate discount using nested conditionals and ternary operators
let discountPercentage;

if (customerType === "vip") {
    // VIP customers: 20% discount always
    discountPercentage = 20;
} else if (customerType === "premium") {
    // Premium customers: 15% on weekends, 10% on weekdays
    discountPercentage = isWeekend ? 15 : 10;
} else if (customerType === "regular") {
    // Regular customers: 10% if purchase > $100, 5% if purchase > $50, 0% otherwise
    discountPercentage = purchaseAmount > 100 ? 10 : 
                        purchaseAmount > 50 ? 5 : 0;
} else {
    // Unknown customer type
    discountPercentage = 0;
}

let discountAmount = (purchaseAmount * discountPercentage) / 100;
let finalPrice = purchaseAmount - discountAmount;