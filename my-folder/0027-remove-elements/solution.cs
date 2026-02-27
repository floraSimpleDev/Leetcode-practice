public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int index = 0;

        foreach (int value in nums) {
            if (value != val) {
                nums[index] = value;
                index++;
            }
        }

        return index;
    }
}
