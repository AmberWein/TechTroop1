class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(value) {
    if (this.value === value) return true;

    if (value > this.value) {
      return this.rightChild ? this.rightChild.findNode(value) : false;
    } else {
      return this.leftChild ? this.leftChild.findNode(value) : false;
    }
  }

  findCommonParent(value1, value2) {
    if (value1 < this.value && value2 < this.value) {
      if (
        this.leftChild &&
        (this.leftChild.value === value1 || this.leftChild.value === value2)
      )
        return this.value;
      return this.leftChild.findCommonParent(value1, value2);
    }

    if (value1 > this.value && value2 > this.value) {
      if (
        this.rightChild &&
        (this.rightChild.value === value1 || this.rightChild.value === value2)
      )
        return this.value;
      return this.rightChild?.findCommonParent(value1, value2);
    }

    // first split point
    else return this.value;
  }

  findMin() {
    let current = this;
    while (current.leftChild) {
      current = current.leftChild;
    }
    return current;
  }

  removeNode(currentNode, value, parent = null) {
    // traverse the tree to find the Node
    if (value < currentNode.value && currentNode.leftChild) {
      return currentNode.leftChild.removeNode(
        currentNode.leftChild,
        value,
        currentNode
      );
    } else if (value > currentNode.value && currentNode.rightChild) {
      return currentNode.rightChild.removeNode(
        currentNode.rightChild,
        value,
        currentNode
      );
    } else if (value === currentNode.value) {
      // case 1: no children
      if (!currentNode.leftChild && !currentNode.rightChild) {
        if (parent) {
          if (parent.leftChild === currentNode) parent.leftChild = null;
          else parent.rightChild = null;
        } else {
          currentNode.value = null; // edge case: removing root node with no children
        }

        // case 2: one child
      } else if (currentNode.leftChild && !currentNode.rightChild) {
        if (parent) {
          if (parent.leftChild === currentNode)
            parent.leftChild = currentNode.leftChild;
          else parent.rightChild = currentNode.leftChild;
        } else {
          this._copyNode(currentNode, currentNode.leftChild);
        }
      } else if (!currentNode.leftChild && currentNode.rightChild) {
        if (parent) {
          if (parent.leftChild === currentNode)
            parent.leftChild = currentNode.rightChild;
          else parent.rightChild = currentNode.rightChild;
        } else {
          this._copyNode(currentNode, currentNode.rightChild);
        }

        // case 3: two children
      } else {
        let minNode = currentNode.rightChild.findMin(); // find in-order successor
        currentNode.value = minNode.value;
        // recursively delete the successor node
        currentNode.rightChild.removeNode(
          currentNode.rightChild,
          minNode.value,
          currentNode
        );
      }
      return true;
    }
    return false; // not found
  }

  _copyNode(target, source) {
    target.value = source.value;
    target.leftChild = source.leftChild;
    target.rightChild = source.rightChild;
  }
}
// ex1
let letters = ["H", "E", "S", "G", "L", "Y", "I"];

// insert values
let bSTree = new BSNode(letters[0]); // root value
for (let i = 1; i < letters.length; i++) {
  bSTree.insertNode(letters[i]);
}

// Use the following to test
console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F")); // should print false
console.log(bSTree.findNode("y")); // should print false - we didn't make the tree case sensitive!

// ex2
letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
// insert values
bSTree = new BSNode(letters[0]); // root value
for (let i = 1; i < letters.length; i++) {
  bSTree.insertNode(letters[i]);
}

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G")); //should return "E"
console.log(bSTree.findCommonParent("B", "L")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"
