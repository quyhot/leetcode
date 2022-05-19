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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let rs = [], n = 0
    function recursive(n = 0, r) {
        if (!r) return
        if (!rs[n]) rs[n] = []
        rs[n].push(r.val)
        recursive(n + 1, r.left)
        recursive(n + 1, r.right)
        n--
    }
    recursive(0, root)
    return rs
};