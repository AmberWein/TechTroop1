const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

// const userName = 'Bob';
// const userName = 'Ted';
const userName = 'Alice';
const normalizedName = userName.toLowerCase();

if (reservations[userName]) {
  if (!reservations[userName].claimed) {
    console.log(`Welcome, ${userName}`);
    reservations[userName].claimed = true;
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  // new walk-in customer, create a reservation on the spot
  reservations[userName] = { claimed: true };
  console.log(`Welcome, ${userName}. We've added you to the reservation list.`);
}