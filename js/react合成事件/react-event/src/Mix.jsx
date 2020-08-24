import React from 'react';
class Mix extends React.Component {
  state = {
    visiable: false
  }
  handleToogle = (e) => {
    console.log(1)
    this.setState({
      visiable: !this.state.visiable
    })
    e.stopPropagation();
    //所有的react事件都放在了 document上面
    //所有的事件统一采用的事件监听 都是一个 document.addEventListener('click')
    //事件监听器内部维护了 元素和事件处理函数的关系
    //e.stopPropagation()：也是react 自己实现的阻止冒泡
    //仅限于 都用react事件才生效
    //合成事件：就是react的一套事件系统
  }
  componentDidMount() {
    document.body.addEventListener('click', () => {
        console.log(2)
      this.setState({
        visiable: false
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToogle}> toogle </button>
        <div style={{ display: this.state.visiable ? 'block' : 'none'}}>
          内容
        </div>
      </div>
    )
  }
}
export default Mix;