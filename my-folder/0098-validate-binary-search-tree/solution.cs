/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool IsValidBST(TreeNode root) {
        bool validRangeRecursion(TreeNode node, int? min, int? max) {
            if (node == null) return true;

            if ((min.HasValue && node.val <= min) 
                || (max.HasValue && node.val >= max)) return false;
            
            return validRangeRecursion(node.left, min, node.val)
                && validRangeRecursion(node.right, node.val, max);
        }

        return validRangeRecursion(root, null, null);
    }
}
