/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i > c) dp[i] = dp[i] < dp[i - c] + dp[c] ? dp[i] : dp[i - c] + dp[c]
            else if (i === c) dp[i] = 1
        }
    }
    console.log(dp)
    return dp[amount] === amount + 1 ? -1 : dp[amount]
};

console.log(coinChange([2], 3))