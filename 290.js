/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const splitS = s.split(' '), splitPattern = pattern.split('')
    if (splitS.length !== splitPattern.length) return false
    const objCheck = {}
    for (const [i, value] of splitPattern.entries()) {
        if (objCheck[value] && objCheck[value] !== splitS[i] ||
            !objCheck[value] && Object.values(objCheck).includes(splitS[i])) {
            return false
        } else {
            objCheck[value] = splitS[i]
        }
    }
    return true
};

console.log(wordPattern("abba", "dog dog dog dog"))