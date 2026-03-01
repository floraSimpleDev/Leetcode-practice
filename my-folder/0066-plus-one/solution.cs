public class Solution {
    public int[] PlusOne(int[] digits) {
        for (int i = digits.Length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;

                return digits;
            }

            digits[i] = 0;
        }

        int[] carriedDigits = new int[digits.Length + 1];
        carriedDigits[0] = 1;

        return carriedDigits;
    }
}
