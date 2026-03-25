/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var BST = function (nums, left, right) {
    if (left > right) {
        return null;
    }

    let pivot = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[pivot], null, null);

    root.left = BST(nums, left, pivot - 1);
    root.right = BST(nums, pivot + 1, right);

    return root;
}

var sortedArrayToBST = function(nums) {
    return BST(nums, 0, nums.length - 1);
};
