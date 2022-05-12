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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum, sum = 0, position = 0) {
    if (root.length === 0) return false
    if (position >= root.length || root[position] === null) {
        return sum === targetSum
    } else {
        sum += root[position]
        return hasPathSum(root, targetSum, sum, 2 * position + 1) || hasPathSum(root, targetSum, sum, 2 * position + 2)
    }
};
// console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22))

console.log(hasPathSum([], 22))