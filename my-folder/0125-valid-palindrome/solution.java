class Solution {
    public boolean isPalindrome(String s) {
        if (s.isEmpty()) {return true;}

        int left = 0;
        int right = s.length() - 1;
        
        while (left < right) {
            char first = s.charAt(left);
            char second = s.charAt(right);

            if (first >= 'A' && first <= 'Z') first = (char)(first + 32);
            if (second >= 'A' && second <= 'Z') second = (char)(second + 32);

            if (!((first >= 'a' && first <= 'z') || (first >= '0' && first <= '9'))) {
                left++;
                continue;
            }
            if (!((second >= 'a' && second <= 'z') || (second >= '0' && second <= '9'))) {
                right--;
                continue;
            }

            if (first != second) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
