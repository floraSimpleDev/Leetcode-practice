public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums is null) return 0;

        int length = nums.Length;
        if (length == 1) return 1;

        int index = 0;

        for (int i = 0; i < length - 1; i++) {
            if (nums[i] != nums[i + 1]) {
                nums[index++] = nums[i];
            }
        }

        nums[index++] = nums[^1];

        return index;
    }
}
