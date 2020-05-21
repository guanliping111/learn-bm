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
var swapPairs = function(head) {
    //递归
    if(head == null || head.next == null )
        return head;
    let node1 = head, node2 = head.next;
    node1.next = swapPairs(node2.next);
    node2.next = node1;
    return node2;


    //循环
    // if(head == null || head.next == null) 
    //     return head;
    // let Head = p = new ListNode();
    // let node1, node2;
    // Head.next = head;
    // while((node1 = p.next) && (node2 = p.next.next)) {
    //     node1.next = node2.next;
    //     node2.next = node1;
    //     p.next = node2;
    //     p = node1;
    // }
    // return Head.next;

};