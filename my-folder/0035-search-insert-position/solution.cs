public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int left = 0, right = nums.Length - 1, pivot;

        while (left <= right) {
            pivot = left + (int)((right - left) / 2);

            if (nums[pivot] == target) return pivot;

            if (nums[pivot] < target) left = pivot + 1;

            else right = pivot - 1;
        }

        return left;
    }
}
