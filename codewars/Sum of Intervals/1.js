function sumIntervals(intervals) {
    //排序 只要看第一个值就行
    intervals.sort((a, b) =>  a[0] - b[0])
    let max = intervals[0][1];//最大值 二维数组 两个下标
    // console.log(max);
    return intervals.reduce((pre, cur, i) => {
        // console.log(cur)
        if (i >= 1) {
            //看第二个数组的第一个数字 小于 max的话 把max换过去
            if (cur[0] < max) cur[0] = max
            //如果第二个数字比max大 把cur[1]换过去
            if(cur[1] > max) max = cur[1]
        }
        //替换后 如果第一个数字比第二个大 就是本身
        if(cur[1] < cur[0]) return pre = pre
        //返回 间隔之和 = 0 + (第二个数 - 第一个数)
        return pre = pre + (cur[1] - cur[0]);
    }, 0)
}

  console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
console.log(sumIntervals([[1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]]))
