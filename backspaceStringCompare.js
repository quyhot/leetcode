var backspaceCompare = function(s, t) {
    const a = [], b = []
    for (const i of s) {
        if (i === '#') {
            a.pop()
        } else {
            a.push(i)
        }
    }
    for (const i of t) {
        if (i === '#') {
            b.pop()
        } else {
            b.push(i)
        }
    }
    if (a.length !== b.length) return false
    else {
        for (const i in a) {
            if (a[i] !== b[i]) {
                return false
            }
        }
    }
    return true
}

console.log(backspaceCompare("a#c", "b"))