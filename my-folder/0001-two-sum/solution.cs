public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var count = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (count.TryGetValue(complement, out int index)) {
                return new[] {i, index};
            }

            count[nums[i]] = i;
        }
        return null;
    }
}
