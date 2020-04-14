//API   parseInt(string, radix)  
//string：要被解析的值。如果参数不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。
//radix（可选）：需要转换的进制，介于 2 到 36。
//返回值： 如果被解析参数的第一个字符无法被转化成数值类型，则返回NaN。

// var myAtoi = function(str) {
//     const number = parseInt(str, 10);

//     if(isNaN(number)) {
//         return 0;
//     } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
//         return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
//     } else {
//         return number;
//     }
// };


//自动机
var myAtoi = function(str) {
    class Automaton{
      constructor() {
        // 执行阶段，默认处于开始执行阶段
        this.start = 'start';
        // 正负符号，默认是正数
        this.sign = 1;
        // 数值，默认是0
        this.answer = 0;
        /*
        状态和执行阶段的对应表
        [执行阶段, [空格, 正负, 数值, 其他]]
        */
        this.map = new Map([
          ['start', ['start', 'signed', 'in_number', 'end']],
          ['signed', ['end', 'end', 'in_number', 'end']],
          ['in_number', ['end', 'end', 'in_number', 'end']],
          ['end', ['end', 'end', 'end', 'end']]
        ])
      }
      // 获取状态的索引
      getIndex(char) {
        if (char === ' ') {  
          return 0;// 空格判断
        } else if (char === '-' || char === '+') {        
          return 1;// 正负判断
        } else if (typeof Number(char) === 'number' && !isNaN(char)) {         
          return 2;// 数值判断
        } else {         
          return 3;// 其他情况
        }
      }
      /*
      关键点：
      字符转换执行函数
      */
      get(char) {
        console.log(char);//每次传入字符时，都要变更自动机的执行阶段
        this.start = this.map.get(this.start)[this.getIndex(char)];
        if(this.start === 'in_number') {
          /*
          小技巧：
          在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值
          this.answer = this.answer * 10 + (char - 0);
          /*
          易错点：
          在进行负数比较时，需要将INT_MIN变为正数
          */
          this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
        } else if (this.start === 'signed') {
          this.sign = char === '+' ? 1 : -1;
        }
      }
    }
    // 生成自动机实例
    let automaton = new Automaton();  
    for(let char of str) {// 遍历每个字符   
      automaton.get(char); // 依次进行转换
    }
    return automaton.sign * automaton.answer;// 返回值，整数 = 正负 * 数值
  };
