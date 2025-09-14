class Solution {
    public int heightChecker(int[] heights) {
        int[] sorted = heights.clone();
        boolean isSwapped = true;
        
        while (isSwapped) {
            isSwapped = false;
            for (int i = 0; i < heights.length - 1; i++) {
                if (sorted[i] > sorted[i + 1]) {
                    int temp = sorted[i];
                    sorted[i] = sorted[i + 1];
                    sorted[i + 1] = temp;
                    isSwapped = true;
                }
            }
        }
        
        List<Integer> indices = new ArrayList<>();
        for (int j = 0; j < heights.length; j++) {
            if (sorted[j] != heights[j]) {
                indices.add(j);
            }
        }
        
        return indices.size();
    }
}
