/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
 /* 
  * MergeTwoLists(first, second) {
    if list1[0] < list2[0]:
        get list1[0], then MergeTwoLists(list1[1:], list2)
    else:
        get list2[0], then MergeTwoLists(list2[1:], list1)
    return result list
  }
  */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }
        else if (list2 == null) {
            return list1;
        }
        if (list1.val < list2.val) {
            list1.next = MergeTwoLists(list1.next, list2);
            return list1;
        }
        else {
            list2.next = MergeTwoLists(list2.next, list1);
            return list2;
        }
    }
}
