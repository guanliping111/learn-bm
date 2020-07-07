//  1->2->3->4->5->NULL
//  奇链表：1->3->5
//  偶链表：2->4 
//  奇链表.next = 偶链表

// n: 链表的长度
//时间复杂度：O(n) 空间复杂度：n
//oddEvenList({val: 1, next: {val: 2, next: null}});
var oddEvenList = function(head) {
    let l1 = { val: null, next: null },l1Current = l1,
        l2 = { val: null, next: null },l2Current = l2,
        i = 1,
        current = head;
    while (current) {
        // console.log(current, l1Current, l2Current);
        if (i % 2 !== 0) {
            l1Current.next = current;
            l1Current = l1Current.next;
            // l1.next = current;
        } else {
            l2Current.next = current;
            l2Current = l2Current.next;
            // l2.next = current;
        }
        i++;
        current = current.next;
    }
    // 去掉尾巴
    if (i % 2 !== 0) {
        l1Current.next = null;
    }else {
        l2Current.next = null;
    }
    // console.log(l1,l2);
    l1Current.next = l2.next;
    return l1.next;
};