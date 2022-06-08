/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    let start = 0, end = s.length - 1
    while(start < end) {
        if (s[start] != s[end]) return 2
        start++
        end--
    }
    return 1
};