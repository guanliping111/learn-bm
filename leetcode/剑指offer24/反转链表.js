/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //链表 => 遍历 
    //头插法   暂存 指向 归位
    //初始设定
    let pre = null;
    let cur = head;

    //终止条件
    while(cur != null) {
        //暂存
        let temp = cur.next;
        //指向
        cur.next = pre;
        //归位
        pre = cur;
        cur = temp;
    }
    return pre;
};