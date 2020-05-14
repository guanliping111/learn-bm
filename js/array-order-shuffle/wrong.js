let arr = [0,1,2,3,4,5,6,7,8,9];
let res = [0,0,0,0,0,0,0,0,0,0]
//每一个数在每一位出现的概率是均等的 => 把重复乱序足够多的次数
//console.log(arr.sort(() => Math.random() - 0.5));
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
let t = 1000;
for (let i = 0; i < t; i++) {
  // 浅拷贝一下 slice
  let sorted = shuffle(arr.slice(0));
  for (let i = 0; i < sorted.length; i ++) {
    res[i] = sorted[i] + res[i];
  }
}
console.log(res.map(sum => sum / t));

console.log(arr.sort((a,b) => a-b));//升序  b-a 降序

function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {//外层循环
        for(let j = 0; j < len - i - 1; j ++) {//内层循环
            let k = j + 1;
            // random: [0~1]  0.5在中间
            //() => Math.random() - 0.5)
            //两个数交换的概率 50%
            if(arr[i] > arr[k]) {
                [arr[i],arr[k]] = [arr[k], arr[i]]
            }
        }
    }
    console.log(arr);
}
bubbleSort(arr);