/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let tempArr = Array(nums.length).fill(0)

    let merge = (left, mid, right) => {
        let length1 = mid - left + 1
        let length2 = right - mid

        let start1 = left
        let start2 = mid + 1

        for (let i = 0; i < length1; i++) {
            tempArr[start1 + i] = nums[start1 + i]
        }
        for (let j = 0; j < length2; j++) {
            tempArr[start2 + j] = nums[start2 + j]
        }

        let i = 0, j = 0, k = left
        while (i < length1 && j < length2) {
            if (tempArr[start1 + i] < tempArr[start2 + j]) {
                nums[k] = tempArr[start1 + i]
                i += 1
            } else {
                nums[k] = tempArr[start2 + j]
                j += 1
            }
            k += 1
        }

        while (i < length1) {
            nums[k] = tempArr[start1 + i]
            i += 1
            k += 1
        }
        while (j < length2) {
            nums[k] = tempArr[start2 + j]
            j += 1
            k += 1
        }
    }

    let mergeSort = (left, right) => {
        if (left >= right) return

        let mid = Math.floor((left + right) / 2)

        mergeSort(left, mid)
        mergeSort(mid + 1, right)

        merge(left, mid, right)
    }

    mergeSort(0, nums.length - 1)
    return nums
};
