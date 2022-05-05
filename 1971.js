/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var getVertex = (source, edge) => {
    return source !== edge[0] ? edge[0] : edge[1]
}
var validPath = function (n, edges, source, destination) {
    if (!edges.length || source === destination) return true
    const visited = new Array(n), queue = []
    queue.push(source)
    let temp, vertex
    while (queue.length) {
        temp = queue.pop()
        if (visited[temp]) continue
        visited[temp] = true
        for (const edge of edges) {
            if (edge.includes(temp)) {
                vertex = getVertex(temp, edge)
                if (!visited[vertex] && destination === vertex) {
                    return true
                } else if (!visited[vertex] && destination !== vertex) {
                    queue.push(vertex)
                }
            }
        }
    }
    return false
};

// console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9))
