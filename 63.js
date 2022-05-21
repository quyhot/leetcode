/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] || obstacleGrid[0][0]) return 0
    if (obstacleGrid.length === 1 || obstacleGrid[0].length === 1) return 1
    const dp = new Array(obstacleGrid.length).fill(0).map(() => new Array(obstacleGrid[0].length).fill(0))
    dp[0][0] = 1
    for (let i = 1; i < obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i]) break
        dp[0][i] = 1
    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0]) break
        dp[i][0] = 1
    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j]) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};

console.log(uniquePathsWithObstacles([[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]))