class UniqueArray {
  constructor() {
    this.items = [];
  }

  // deep equality checking
  isEqual(item1, item2) {
    if (item1 === item2) return true;

    // handle null
    if (item1 == null || item2 == null) return false;

    if (typeof item1 !== typeof item2) return false;

    // objects check
    if (typeof item1 === "object") {
      const keys1 = Object.keys(item1);
      const keys2 = Object.keys(item2);

      if (keys1.length !== keys2.length) return false;

      for (let key of keys1) {
        if (!keys2.includes(key) || !this.isEqual(item1[key], item2[key])) {
          return false;
        }
      }
      return true;
    }

    return false;
  }

  add(item) {
    if (!this.exists(item)) {
      this.items.push(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    return this.items.some((existingItem) => this.isEqual(existingItem, item));
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1;
  }
}


const uniqueStuff = new UniqueArray();

uniqueStuff.add("toy");
uniqueStuff.add("toy");
uniqueStuff.add({ x: 3 });
uniqueStuff.add({ x: 3 });
uniqueStuff.add(["a", "b"]);
uniqueStuff.add(["a", "b"]);

uniqueStuff.showAll();