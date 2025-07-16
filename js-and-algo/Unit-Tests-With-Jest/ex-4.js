// Checks if an array contains boolean values.
// Returns an error if none are found. If booleans exist, returns true when trues outnumber falses; otherwise returns false.

function validate(arr) {
    const booleans = arr.filter(item => typeof item === 'boolean');

    if (booleans.length === 0) {
        return { error: "Need at least one boolean" };
    }

    const trues = arr.filter(val => val === true).length;
    const falses = arr.filter(val => val === false).length;

    return trues > falses;
}

module.exports = validate;