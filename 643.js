/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxAverage = 0, i = 0, average
    for (; i < nums.length; i++) {
        if (i >= k) {
            average = average - nums[i-k] + nums[i]
            maxAverage = maxAverage < average ? average : maxAverage
        } else {
            maxAverage += nums[i]
            average = maxAverage
        }
    }
    return parseFloat(maxAverage/k).toFixed(5)
};

console.log(findMaxAverage([0,4,0,3,2], 1))