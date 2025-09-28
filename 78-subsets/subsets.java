class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList();
        dfs(nums.length - 1, nums, res, new ArrayList<Integer>());
        return res;
    }

    public void dfs(int i, int[] nums, List<List<Integer>> res, List<Integer> subset) {
        if (i < 0) {
            res.add(new ArrayList<>(subset));
            return;
        }
        dfs(i - 1, nums, res, subset);
        subset.add(nums[i]);
        dfs(i - 1, nums, res, subset);
        subset.remove(subset.size() - 1);
    }
}