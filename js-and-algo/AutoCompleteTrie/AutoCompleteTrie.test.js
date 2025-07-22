const AutoCompleteTrie = require("./AutoCompleteTrie");

describe("addWord", () => {
  test("adds a word to a trie", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("cat");
    expect(trie.findWord("cat")).toBe(true);
  });

  test("add multiple words with the same prefix", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("cat");
    trie.addWord("car");
    expect(trie.findWord("cat")).toBe(true);
    expect(trie.findWord("car")).toBe(true);
  });

  test("does not falsely find a prefix as a word", () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("cat");
    expect(trie.findWord("ca")).toBe(false);
  });
});

  describe("findWord", () => {
    let trie = new AutoCompleteTrie();

    beforeEach(() => {
      trie = new AutoCompleteTrie();
      trie.addWord("cat");
      trie.addWord("car");
      trie.addWord("card");
    });

    test("should return true for a word that exists", () => {
      expect(trie.findWord("cat")).toBe(true);
      expect(trie.findWord("car")).toBe(true);
      expect(trie.findWord("card")).toBe(true);
    });

    test("should return false for a word that does not exist", () => {
      expect(trie.findWord("cab")).toBe(false);
      expect(trie.findWord("cart")).toBe(false);
      expect(trie.findWord("dog")).toBe(false);
    });

    test("should return false for a prefix that is not a full word", () => {
      expect(trie.findWord("ca")).toBe(false);
      expect(trie.findWord("c")).toBe(false);
    });
  });


  describe("predictWords", () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
    trie.addWord("cat");
    trie.addWord("car");
    trie.addWord("card");
    trie.addWord("care");
    trie.addWord("dog");
  });

  test("returns all words with a given prefix", () => {
    const predictions = trie.predictWords("car");
    expect(predictions.sort()).toEqual(["car", "card", "care"].sort());
  });

  test("returns an empty array when no words match the prefix", () => {
    expect(trie.predictWords("z")).toEqual([]);
    expect(trie.predictWords("cart")).toEqual([]);
  });

  test("returns all words if prefix is empty", () => {
    const predictions = trie.predictWords("");
    expect(predictions.sort()).toEqual(["cat", "car", "card", "care", "dog"].sort());
  });

  test("returns only full words, not prefixes", () => {
    const predictions = trie.predictWords("c");
    expect(predictions).toEqual(expect.arrayContaining(["cat", "car", "card", "care"]));
    expect(predictions).not.toContain("c");
  });
});
