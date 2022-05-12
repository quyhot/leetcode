/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    if (nums.length === 1) return 0
    nums.sort((a, b) => {
        return a - b
    })
    let min = nums[k - 1] - nums[0], i = k
    for (; i < nums.length; i++) {
        min = nums[i] - nums[i - k + 1] < min ? nums[i] - nums[i - k + 1] : min
    }
    return min
};

console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6))

// console.log(minimumDifference([9, 4, 1, 7], 2))