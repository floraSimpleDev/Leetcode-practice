public class Solution {
    public int[] SortArray(int[] nums) {
        int[] tool = new int[nums.Length];
        MergeSort(nums, tool, 0, nums.Length - 1);

        return nums;
    }

    // locate, divide, then start to Merge it
    private void MergeSort(int[] array, int[] tool, int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;
            MergeSort(array, tool, start, mid);
            MergeSort(array, tool, mid + 1, end);

            Merge(array, tool, start, mid, end);
        }
    }

    private void Merge(int[] array, int[] tool, int start, int mid, int end) {
        int head1 = start;
        int head2 = mid + 1;
        int head3 = start;
        
        while (head1 <= mid && head2 <= end) {
            if (array[head1] <= array[head2]) {
                tool[head3++] = array[head1++];
            }

            else {
                tool[head3++] = array[head2++];
            }
        }

        while (head1 <= mid) {
            tool[head3++] = array[head1++];
        }

        while (head2 <= end) {
            tool[head3++] = array[head2++];
        }

        for (int i = start; i <= end; i++) {
            array[i] = tool[i];
        }
    }
}
