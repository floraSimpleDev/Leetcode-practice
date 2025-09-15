class Solution {
    public boolean canPermutePalindrome(String s) {
        Set<Character> stringSet = new HashSet();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!stringSet.add(c)) {
                stringSet.remove(c);
            }
        }

        return stringSet.size() <= 1;
    }
}
