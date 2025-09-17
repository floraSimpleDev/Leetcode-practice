class Solution {
    public void sortColors(int[] nums) {        
        int shift = Arrays.stream(nums).min().getAsInt();
        int k = Arrays.stream(nums).max().getAsInt() - shift;
        int[] counts = new int[k + 1];
        
        for (int n : nums) {
            counts[n - shift] += 1;
        }
        
        int startingIndex = 0;
        for (int i = 0; i < k + 1; i++) {
            int count = counts[i];
            counts[i] = startingIndex;
            startingIndex += count;
        }
        
        int sorted[] = new int[nums.length];
        for (int n : nums) {
            sorted[counts[n - shift]] = n;
            counts[n - shift] += 1;
        }
        
        for (int i = 0; i < nums.length; i++) {
            nums[i] = sorted[i];
        }
    }
}
