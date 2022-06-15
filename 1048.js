/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const dp = {}
    let currWord = "", max = 1
    words.sort((a,b) => a.length - b.length)
    for (const word of words) {
        dp[word] = 1
        for (let w = 0; w < word.length; w++) {
            currWord = word.slice(0, w) + word.slice(w + 1)
            if (currWord in dp) {
                dp[word] = Math.max(dp[currWord] + 1, dp[word])
                max = Math.max(max, dp[word])
            }
        }
    }
    return max
};
