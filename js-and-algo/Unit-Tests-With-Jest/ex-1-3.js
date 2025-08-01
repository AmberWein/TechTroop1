// should return true if n is even, false otherwise
function isEven(n) {
    if (typeof n !== 'number') return false;
    return n % 2 == 0 ? true : false
}


// should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}


// should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}


module.exports = {
    isEven, 
    removeAtLeastOne,
    simplify
};
