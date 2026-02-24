public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; i < nums.Length; i++) {
            int index = Array.IndexOf(nums, target - nums[i]);
            if (index >= 0 && index != i) {
                return [i, index];
            }
        }
        return null;
    }
}
