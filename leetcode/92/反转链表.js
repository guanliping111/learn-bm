/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

 //算法思路
 //在看具体算法之前，有必要先弄清楚链接反转的原理以及需要哪些指针。
 //举例而言，有一个三个不同结点组成的链表 A → B → C，需要反转结点中的链接成为 A ← B ← C。
//假设我们有两个指针，一个指向结点 A，一个指向结点 B。 分别记为 prev 和 cur
//third = cur.next
//cur.next = prev
//prev = cur
//cur = third

//prev 指针初始化为 None，cur 指针初始化为链表的 head。
//一步步地向前推进 cur 指针，prev 指针跟随其后。

//注意我们要引入两个额外指针，分别称为 tail 和 con
//tail 指针指向从链表头起的第mm个结点，此结点是反转后链表的尾部，故称为 tail
//con 指针指向第 mm 个结点的前一个结点，此结点是新链表的头部。

var reverseBetween = function(head, m, n) {
    let count = n - m;
    let p = dummyHead = new ListNode();
    let pre, cur, con, tail;
    p.next = head;
    for(let i = 0; i < m - 1; i ++) {
        p = p.next;
    }
    // 保存前节点
    front = p;
    // 同时保存区间首节点
    pre = tail = p.next;
    cur = pre.next;
    // 区间反转
    for(let i = 0; i < count; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 前节点的 next 指向区间末尾
    front.next = pre;
    // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
    tail.next = cur;
    return dummyHead.next;

};