// Last updated: 25/03/2026, 21:43:14
public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if (strs is null) return "";

        string prefix = strs[0];

        for (int j = 1; j < strs.Length; j++) {
            while (!strs[j].StartsWith(prefix)) {
                prefix = prefix.Substring(0, prefix.Length - 1);

                if (prefix is null) return "";
            }
        }

        return prefix;
    }
}