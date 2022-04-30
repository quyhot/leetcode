/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const ballPosition = [], result = []
    let total = 0
    for (const index in boxes) {
        if (boxes[index] === "1") ballPosition.push(index)
    }
    for (const index in boxes) {
        for (const position of ballPosition) {
            total = total + Math.abs(position - index)
        }
        result.push(total)
        total = 0
    }
    return result
};

console.log(minOperations("001011"))