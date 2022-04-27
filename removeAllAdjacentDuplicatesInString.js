var removeDuplicates = function (s) {
    const rs = []
    for (const i of s) {
        if (!rs.length) {
            rs.push(i)
        } else {
            if (rs[rs.length - 1] === i) rs.pop()
            else rs.push(i)
        }

    }
    return rs.join('')
};

console.log(removeDuplicates("azxxzy"))