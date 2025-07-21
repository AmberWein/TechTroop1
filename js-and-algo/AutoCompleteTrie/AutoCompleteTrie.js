class AutoCompleteTrie {
  constructor(value = null, children = {}, endOfWord = false) {
    this.value = value;
    this.children = children;
    this.endOfWord = endOfWord;
  }

  addWord(word) {
    let currentNode = this;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new AutoCompleteTrie(char);
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
  }

  findWord(word) {
    let currentNode = this;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return false; // word not found
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.endOfWord;
  }

  _getRemainingTree(prefix, node = this) {
    let currentNode = node;
    for (let char of prefix) {
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode;
  }

  _findAllWords(node, prefix, results) {
    if (node.endOfWord) {
      results.push(prefix);
    }
    for (let char in node.children) {
      this._findAllWords(node.children[char], prefix + char, results);
    }
  }

  predictWords(prefix) {
    const subTree = this._getRemainingTree(prefix);
    if (!subTree) return []; // prefix not found

    const results = [];
    this._findAllWords(subTree, prefix, results);
    return results;
  }
}
