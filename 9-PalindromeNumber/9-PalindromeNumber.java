// Last updated: 25/03/2026, 21:43:12
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        int reverse = 0;
        int origin = x;

        while (origin != 0) {
            reverse = origin % 10 + reverse * 10;
            origin = origin / 10;
        }

        return reverse == x;
    }
}