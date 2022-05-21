/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     let count = 0
//     const findPath = (x = 0, y = 0) => {
//         if (x === m - 1 && y === n - 1) {
//             count++
//             return
//         }
//         if (x >= m || y >= n) return
//         findPath(x + 1, y)
//         findPath(x, y + 1)
//     }
//     findPath()
//     return count
// };

var uniquePaths = function (m, n) {
    let count = 0
    const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
    dp[0][0] = 1
    for (let i = 0; i < m; i++) {
        dp[i][0]
    }
};

console.log(uniquePaths(23, 12))