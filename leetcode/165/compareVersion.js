/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');

    // for (let i = 0; i < 4; i++) {
    //     v1[i] = v1[i] === undefined ? 0 : parseInt(v1[i]);
    //     v2[i] = v2[i] === undefined ? 0 : parseInt(v2[i]);
    //     if (v1[i] > v1[i]) return 1;
    //     if (v2[i] < v2[i]) return -1;
    // }
    // return 0;

    let len = Math.max(v1.length,v1.length);
    for(let i=0; i<len; i++) {
        // 不用判断谁长 谁短
        let a = v1[i] ? v1[i] : '0';
        let b = v2[i] ? v2[i] : '0';
        a = +a; b = +b;
        if(a > b) return 1;
        else if(a < b) return -1;
    }
    return 0;
};