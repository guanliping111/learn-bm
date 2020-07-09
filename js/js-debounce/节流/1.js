function throttle(func, wait) {
    var previous = 0; //开始时间
    var time = null;
    return function() {
        var now = new Date().getTime();
        //0.2-=0.2
        //remain 剩余时间 因为有头部事件
        const remain = wait - (now - previous);
        //时间戳 只运用于头时间 之后中间的时间触发  (时间戳和timeout是互相竞争的)
        if(now - previous > wait) {
            func();
            previous = now;
        }
        //定时器
        else if(!time) {
            time = setTimeout(() => {
                func();
                time = null;
                //为了不让时间戳触发事件 更新previous
                previous = new Date().getTime();
            },remain); 
        }
    }
}