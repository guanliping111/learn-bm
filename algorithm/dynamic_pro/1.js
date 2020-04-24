//- 莱文斯坦距离 将一个字符串替换成另一个字符串
var a = "mitcmu";
var b = "mtacnu";
var n = 6, m = 6;//长度length
//回溯
var minDist = Infinity;  // 
function lwstBT(i, j, edist) {//递归 每一次都是 i，j 编辑距离 edist +1
    //退出条件
    if( i == n || j == m) {//不一定 同时到达
        if (i < n) edist += (n -i);  
        if (j < m) edist += (m -j);
        if (edist < minDist) minDist = edist; 
        return ;
    }
    if(a[i] == b[j]) {
        lwstBT(i + 1, j + 1, edist);//两个相等，不改变编辑距离
    }else{
        //穷举 增 删 改
        lwstBT(i + 1, j, edist + 1); // 删除a[i] 或者 b[j] 前添加一个字符串
        lwstBT(i, j + 1, edist + 1); // 删除b[j] 或者 a[i] 前添加一个字符串
        lwstBT(i + 1, j + 1, edist + 1); // 替换为相同字符
    }
}
lwstBT(0,0,0,0);
console.log(minDist);