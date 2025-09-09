class Solution {
    public int[] searchRange(int[] nums, int target) {
        // if (nums.length == 1) {
        //     if (nums[0] == target) {
        //         return new int[] { 0, 0 };
        //     } else {
        //         return new int[] { -1, -1 };
        //     }
        // }
        if (nums.length == 0) {
            return new int[] { -1, -1 };
        }
        int[] res = new int[] { -1, -1 };
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int m = (l + r) / 2;
            if (nums[m] >= target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        if (l < nums.length && nums[l] == target) {
            res[0] = l;
        }
        l = 0;
        r = nums.length - 1;
        while (l <= r) {
            int m = (l + r) / 2;
            if (nums[m] <= target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        if (r >= 0 && nums[r] == target) {
            res[1] = r;
        }
        return res;
    }
}