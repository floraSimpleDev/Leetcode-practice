class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        int min = arr[0];
        int max = arr[0];
        for (int num : arr) {
            min = Math.min(num, min);
            max = Math.max(num, max);
        }

        int[] line = new int[max - min + 1];
        int shift = -min;
        List<List<Integer>> result = new ArrayList();
        
        for (int num : arr) {
            line[num + shift] += 1;
        }

        int minDiff = max - min;
        int prev = 0;
        for (int curr = 1; curr <= max + shift; curr++) {
            if (line[curr] == 0) continue;

            if (curr - prev == minDiff) {
                result.add(Arrays.asList(prev - shift, curr - shift));
            }
            else if (curr - prev < minDiff) {
                result = new ArrayList();
                minDiff = curr - prev;
                result.add(Arrays.asList(prev - shift, curr - shift));
            }

            prev = curr;
        }

        return result;
    }
}
