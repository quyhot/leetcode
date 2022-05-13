/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [], stack = []
    let sum = 0
    function backTrack(index = 0) {
        for (let i = index; i < candidates.length; i++) {
            stack.push(candidates[i])
            sum += candidates[i]
            if (sum === target) {
                result.push(stack.slice())
            } else if (sum < target) {
                backTrack(i)
            }
            stack.pop()
            sum -= candidates[i]
        }
    }
    backTrack()
    return result
};

console.log(combinationSum([2,3,5], 8))