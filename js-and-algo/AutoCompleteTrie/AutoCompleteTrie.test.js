const AutoCompleteTrie = require('./AutoCompleteTrie');

describe('addWord', () => {
    test('adds a word to a trie', () => {
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

    test('does not falsely find a prefix as a word', () => {
    const trie = new AutoCompleteTrie();
    trie.addWord("cat");
    expect(trie.findWord("ca")).toBe(false);
  });
});