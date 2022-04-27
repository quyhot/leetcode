var convert = function (s, numRows) {
    if (numRows === 1) return s
    const rsArr = [], distance = numRows - 2
    let count = zigzag = 0
    for (const i of s) {
        if (count === numRows) {
            rsArr[rsArr.length + distance] = i
            zigzag = numRows - 2
            count = 1
        } else {
            if (zigzag) {
                rsArr[rsArr.length + distance] = i
                zigzag--
            } else {
                count++
                rsArr.push(i)
            }
        }
    }
    // return rsArr
    let rs = ''
    for (let i = 0; i < numRows; ++i) {
        for (let j = i; j < rsArr.length; j += numRows) {
            if (rsArr[j]) rs += rsArr[j]
        }
    }
    return rs
};

console.log(convert("AB", 1))