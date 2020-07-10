function disemvowel(str) {
    const vowels = 'aeiou';
    var arr = str.split('');// 分割 返回一个字符串数组

    return arr.filter(letter => !vowels.includes(letter.toLowerCase())).join('');

}