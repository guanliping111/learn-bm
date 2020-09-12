function cloneSet(set) {
    let t = new Set();
    set.forEach(v => {
      t.add(clone(v));
    })
    return t;
  }
  // Map  for
  function cloneArray(arr) {
    let t = [];
    arr.forEach(v => {
      t.push(clone(v));//push 到clone函数里面 判断是否要继续拷贝 即数据类型是否符合
    })
    return t;
  }
  function cloneReg(targe) {
    //{}
    const result = new RegExp(targe.source);
    result.lastIndex = targe.lastIndex;
    return result;
  }
  function cloneObj(obj) {
    let t = {};
    Object.keys(obj).forEach(k => {
      t[k] = clone(obj[k]);
    })
    return t
  }
  function cloneFun(func) {
    const funcString = func.toString();
    let paramReg = /\((.+)\)/;
    let bodyReg = /(?<={)(.|\n)+(?=})/m;
    if (func.prototype) {
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
        if (param) {
          const paramArr = param[1].split(',');
          return new Function(...paramArr, body[0]);
        } else {
          return new Function(body[0]);
        }
      } else {
        return null;
      }
    } else {
      return eval(funcString);
    }
  }
  const mapTag = '[object Map]';
  const setTag = '[object Set]';
  const arrayTag = '[object Array]';
  const objectTag = '[object Object]';
  
  const boolTag = '[object Boolean]';
  const dateTag = '[object Date]';
  const errorTag = '[object Error]';
  const numberTag = '[object Number]';
  const regexpTag = '[object RegExp]';
  const stringTag = '[object String]';
  const symbolTag = '[object Symbol]';
  
  
  const needClone = {
    '[object Set]': cloneSet,
    '[object Array]': cloneArray,
    '[object RegExp]': cloneReg,
    '[object Object]': cloneObj,
    '[object Function]': cloneFun
  }
  const whiteList = ['[object String]', '[object Number]']//基本数据类型
  //判断类型的函数  getType
  function getType(target) {
    return Object.prototype.toString.call(target);
  }
  function clone(data) {
    let type = getType(data);//不同类型的数据 找到对应的方法
    if (whiteList.includes(type)) return data; //如果是基本数据类型 直接返回这个数据
    return needClone[type](data);//返回克隆的结果给clone
  }
  
  let c = function(a, b) { return a + b }
  let data = { obj: { a: 1 }, b: [1], c: /[a-z]/, fun: c}
  let data1 = clone(data);
  data1.b.push(2);
  console.log(data1, data);
  console.log(data1.c === data.c);
  console.log(data1.fun === data.fun, data1.fun(1,2));
  