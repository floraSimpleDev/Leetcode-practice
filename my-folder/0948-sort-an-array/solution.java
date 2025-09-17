class Solution {
    private void swap(int[] arr, int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    private void heapify(int[] arr, int size, int index) {
        int left = index * 2 + 1;
        int right = index * 2 + 2;
        int largest = index;

        if (left < size && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != index) {
            swap(arr, index, largest);
            heapify(arr, size, largest);
        }
    }

    private void heapSort(int[] arr) {
        int len = arr.length;
        int parent = len / 2 - 1;

        for (int i = parent; i >= 0; i--) {
            heapify(arr, len, i);
        }

        for (int i = len - 1; i >= 0; i--) {
            swap(arr, 0, i);
            heapify(arr, i, 0);
        }
    }

    public int[] sortArray(int[] nums) {
        heapSort(nums);
        return nums;    
    }
}
