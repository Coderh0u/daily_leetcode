/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sufficientSubset(TreeNode root, int limit) {
        // leaf node
        if (root.left == null && root.right == null) {
            return root.val < limit ? null : root;
        }
        // left branch
        if (root.left != null) {
            root.left = sufficientSubset(root.left, limit - root.val);
        }
        // right branch
        if (root.right != null) {
            root.right = sufficientSubset(root.right, limit - root.val);
        }
        if(root.left == null && root.right == null){
            return null;
        } else {
            return root;
        }
    }
}