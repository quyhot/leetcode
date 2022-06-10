/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1
    let min = 0, left = 0, right = 0
    const objSliding = {}
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in objSliding)) {
            objSliding[s[i]] = i
            right = i
        } else {
            left = objSliding[s[i]] + 1 > left ? objSliding[s[i]] + 1 : left
            objSliding[s[i]] = i
            right = i
        }
        min = right - left + 1 > min ? right - left + 1 : min
    }
    return min
};

console.log(lengthOfLongestSubstring("abba"))