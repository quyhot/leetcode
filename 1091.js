/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    if (grid[grid.length - 1][grid[0].length - 1] || grid[0][0]) return -1
    let minDepth = Number.MAX_VALUE, depth = 0
    const bfs = (i = 0, j = 0) => {
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j]) {
            console.log('check')
            return
        }
        if (i === grid.length - 1 && j === grid[0].length - 1) {
            depth++
            console.log('check1')
            minDepth = minDepth > depth ? depth : minDepth
            return
        }
        arrCheck[i][j] = 1
        console.log(i, j)
        depth++
        bfs(i - 1, j - 1)
        bfs(i - 1, j)
        bfs(i - 1, j + 1)
        bfs(i, j - 1)
        bfs(i, j + 1)
        bfs(i + 1, j - 1)
        bfs(i + 1, j)
        bfs(i + 1, j + 1)
        depth--
    }
    bfs()
    return minDepth
};

console.log(shortestPathBinaryMatrix( [[0,1],[1,0]]))