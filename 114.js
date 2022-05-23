/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (root === null) return
    const queue = [], stack = []
    let val, curNode
    stack.push(root)
    while (stack.length) {
        curNode = stack.pop()
        queue.unshift(curNode.val)
        if (curNode.right !== null) stack.push(curNode.right)
        if (curNode.left !== null) stack.push(curNode.left)
    }
    curNode = root
    while (queue.length) {
        curNode.val = queue.pop()
        if (queue.length) {
            curNode.left = null
            curNode.right = new TreeNode()
            curNode = curNode.right
        }
    }
};