String.prototype.toJadenCase = function () {
    //    return this.split(" ").map((word) => {
    //         return word.charAt().toUpperCase() + word.slice(1);
    //     }).join(" ");
    var str = this;
    var arr = str.toLowerCase().split(' ');
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
};