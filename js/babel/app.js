import React, { Component } from 'react';

const sum = 2 ** 2;

function observer() {}
@observer

class App extends Component {
    render() {
        return (
            <div>
                <img src="baidu.com" alt="baidu" className="box"/>
           </div> 
        //以上代码通过babel 编译成  createElement
        // React.createElement('div') //编译时使用了React
        )
    }
}
export default App;