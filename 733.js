/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, newColor) {
    const colLength = image[0].length, rowLength = image.length
    const pixelCheck = new Array(image.length * rowLength)
    const pixelStack = [[sr, sc]], valueCheck = image[sr][sc]
    image[sr][sc] = newColor
    let row, col
    while (pixelStack.length) {
        const pixel = pixelStack.pop()
        const fourDimentionArr = [[pixel[0] - 1, pixel[1]], [pixel[0] + 1, pixel[1]], [pixel[0], pixel[1] - 1], [pixel[0], pixel[1] + 1]]
        for (const px of fourDimentionArr) {
            row = px[0]
            col = px[1]
            if (row >= 0 && row <= rowLength - 1 && col >= 0 && col <= colLength - 1
                && !pixelCheck[col * rowLength + row] && image[row][col] === valueCheck) {
                console.log(px)
                image[row][col] = newColor
                pixelStack.push(px)
                pixelCheck[col * rowLength + row] = true
            }
        }
    }
    return image
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))