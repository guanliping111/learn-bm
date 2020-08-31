import React, {
    useState,
    // useCallback,
    useRef
  } from "react";
  import "./styles.css";
  // 点击显示 count
  // 快速 点击 增加 count 2次 问 输出什么
  function Example() {
    const [count, setCount] = useState(0);
    let countRef = useRef();
    countRef.current = count;
  
    const handleAlertClick = () => {
      setTimeout(() => {
        console.log("count", count);
      }, 3000);
    };
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>增加 count</button>
        <button onClick={handleAlertClick}>显示 count</button>
      </div>
    );
  }
//  capture value 捕获
// 组件每次render 的时候，都会形成一个快照(当时的状态)
// 每次都有自己独立的 props state

// for(var i = 0; i < 5; i++) {
//     (function(j)  { //匿名函数
//         setTimeout(() => {
//             console.log(a)
//         },1000 * a);
//     },(j))
// }

  
export default class App extends React.Component {
    render() {
      return (
        <div className="main">
          <Example />
        </div>
      );
    }
  }