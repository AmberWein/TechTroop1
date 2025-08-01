const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0, // add missing 'fuel' property with initial value
  fly: function () {
    if (this.fuel < 2) { // use 'this.fuel' to refer to the fuel property of the airplane
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());
