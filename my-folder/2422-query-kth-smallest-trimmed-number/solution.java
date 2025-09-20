class Solution {
    private int[] radixSort(String[] nums, int[] index, int pos) {
        int[] counts = new int[10];
        for (int i : index) {
            int d = nums[i].charAt(pos) - '0';
            counts[d]++;
        }

        int startingIndex = 0;
        for (int j = 0; j < 10; j++) {
            int count = counts[j];
            counts[j] = startingIndex;
            startingIndex += count;
        }

        int[] result = new int[index.length];
        for (int i : index) {
            int d = nums[i].charAt(pos) - '0';
            result[counts[d]] = i; 
            counts[d]++;
        }

        return result;
    }

    public int[] smallestTrimmedNumbers(String[] nums, int[][] queries) {
        int[] index = new int[nums.length];
        for (int i = 0; i < nums.length; i++) index[i] = i;

        int[][] orders = new int[nums[0].length() + 1][];
        for (int pos = nums[0].length() - 1; pos >= 0; pos--) {
            index = radixSort(nums, index, pos);
            int trim = nums[0].length() - pos;
            orders[trim] = index.clone();
        }

        int[] answer = new int[queries.length];
        for (int j = 0; j < queries.length; j++) {
            int k = queries[j][0];
            int trim = queries[j][1];
            answer[j] = orders[trim][k - 1];
        }

        return answer;
    }
}
