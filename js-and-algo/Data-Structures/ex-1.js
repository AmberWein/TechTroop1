class UniqueArray {
  constructor() {
    this.items = [];
    this.itemSet = new Set(); // to keep each item unique
  }

  // Stores the item only if it hasn't been added already
  add(item) {
    if (!this.itemSet.has(item) && (typeof item !== 'object' && typeof item !== 'function')) {
      this.items.push(item);
      this.itemSet.add(item);
    }
  }

  // Shows all the added items
  showAll() {
    console.log(this.items);
  }

  // Returns true if the item has been added, false otherwise (constant time complexity)
  exists(item) {
    return this.itemSet.has(item);
  }
  
  // Returns the item at index index, or -1 if it doesn't exit
  get(index) {
    return this.items[index] !== undefined ? this.items[index] : -1;
  }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
