/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let priceMin = prices[0]
    let profit = 0
    for (const p of prices) {
        if (p < priceMin) {
            priceMin = p
        } else {
            profit = (p - priceMin) > profit ? (p - priceMin) : profit
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))