// Last updated: 25/03/2026, 21:42:43
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();

        for (int num : nums) {
            heap.add(num);

            if (heap.size() > k) {
                heap.remove();
            }
        }

        return heap.peek();
    }
}