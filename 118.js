/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const results = [[1]]
    for (let i = 2; i <= numRows; i++) {
        const arrIn = []
        arrIn.push(1)
        for (let j = 2; j < i; j++) {
            arrIn.push(results[i - 2][j - 2] + results[i - 2][j - 1])
        }
        arrIn.push(1)
        results.push(arrIn)
    }
    return results
};

console.log(generate(5))