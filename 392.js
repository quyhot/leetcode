var isSubsequence = function (s, t) {
    if (s === '') return true
    let i = 0
    let currentValue = s[i]
    for (const str of t) {
        if (currentValue === str) {
            i++
            if (i === s.length) return true
            currentValue = s[i]
        }
    }
    return false
};