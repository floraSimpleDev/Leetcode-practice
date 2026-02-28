function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, pivot;

    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);

        if (nums[pivot] === target) return pivot;

        if (nums[pivot] > target) right = pivot - 1;

        else left = pivot + 1;
    }
    return left;
};
