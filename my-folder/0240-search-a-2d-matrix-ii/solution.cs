public class Solution {
    private int[][] matrix;
    private int target;
    
    public bool SearchMatrix(int[][] mtx, int tgt) {
        matrix = mtx;
        target = tgt;

        if (matrix == null || matrix.Length == 0 || matrix[0].Length == 0) return false;

        return recursion(0, 0, matrix[0].Length - 1, matrix.Length - 1);
    }

    private bool recursion(int left, int up, int right, int down) {
        if (left > right || up > down) return false;

        if (target < matrix[up][left] || target > matrix[down][right]) return false;

        int mid = left + (right - left) / 2;
        int row = up;

        while (row <= down && matrix[row][mid] <= target) {
            if (target == matrix[row][mid]) return true;
            row++;
        }

        return (recursion(left, row, mid - 1, down) ||
                recursion(mid + 1, up, right, row - 1));
    }
}
