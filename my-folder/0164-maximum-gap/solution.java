class Solution {
    private void radixSort(int[] array) {
        int max = Integer.MIN_VALUE;
        for (int num : array) {
            max = Math.max(num, max);
        }
        
        int exp = 1;
        int[] result = new int[array.length];
        while (max / exp > 0) {
            int[] counts = new int[10];
            
            for (int num : array) {
                counts[(num / exp) % 10] += 1;
            }
            
            int prefixSum = 0;
            for (int i = 0; i < 10; i++) {
                int count = counts[i];
                counts[i] = prefixSum;
                prefixSum += count;
            }
            
            for (int num : array) {
                result[counts[(num / exp) % 10]++] = num;
            }
            
            System.arraycopy(result, 0, array, 0, array.length);
            exp *= 10;
        }
    }

    public int maximumGap(int[] nums) {
        if (nums == null || nums.length < 2) return 0;
        
        radixSort(nums);
        
        int maxGap = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            maxGap = Math.max(nums[i + 1] - nums[i], maxGap);
        }
        
        return maxGap;
    }
}
