/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function (rating) {
    let ratingOne, ratingTwo, result, flag
    ratingOne = ratingTwo = result = 0
    for (let i = 0; i < rating.length - 2; i++) {
        ratingOne = rating[i]
        for (let j = i + 1; j < rating.length - 1; j++) {
            ratingTwo = rating[j]
            flag = ratingTwo > ratingOne ? 1 : 0
            for (let z = j + 1; z < rating.length; z++) {
                result = ((flag && rating[z] > ratingTwo) || (!flag && rating[z] < ratingTwo)) ? result + 1 : result
            }
        }
    }
    return result
};

console.log(numTeams([1,2,3,4]))