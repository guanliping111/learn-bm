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
    // //循环
    // if(!head)
    //     return null;
    // let pre = null;
    // let cur = head;
    // while(cur) {
    //     let next = cur.next;// 保存下一个节点的值
    //     cur.next = pre;// 反转链表
    //     pre = cur;//接收反转结果
    //     cur = next;//接回临时存储的后续内容
    // }
    // return pre;

    //递归
        let reverse = (pre, cur) => {
            if(!cur) 
                return pre;
            // 保存 next 节点
            let next = cur.next;
            cur.next = pre;
            return reverse(cur, next);
        }
        return reverse(null, head);
};