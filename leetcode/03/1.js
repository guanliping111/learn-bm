// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
    let set = new Set(); //set 无重复集
    let j = 0, maxLength = 0;
    if(s.length === 0) {
        return 0;
    }
    for(let i = 0; i < s.length; i ++) {
        if(!set.has(s[i])) { //检查set里面有没有set[i]
            set.add(s[i]); //有就添加进set
            maxLength = Math.max(maxLength, set.size); //更新
        }else{//有重复项
            while(set.has(s[i]))  {
                set.delete(s[j]); //删除重复项
                j ++;
            }
            set.add(s[i]); //删除后添加进去
        }
    }
    return maxLength;
};