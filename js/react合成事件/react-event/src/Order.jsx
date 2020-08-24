import React, { Component } from 'react';
class Order extends Component {
    childRef = React.createRef();//获取真实dom节点
    parentRef = React.createRef();
    child = (e) => {
        console.log(11);
        e.stopPropagation();
    }
    parent = () => {
        console.log(22);
    }
    componentDidMount() {
        document.addEventListener('click', () => {
            console.log('document');
        })
        this.childRef.current.addEventListener('click', () => {
            console.log('child')
        })
        this.parentRef.current.addEventListener('click', () => {
            console.log('parent')
        })
        const elements = (<ul>
            <li>1</li>
            <li>2</li>
        </ul>)
        console.log(elements);
    }
    
    render() { 
        return ( 
            <div onClick={this.parent} ref= {this.parentRef}>
                <div onClick={this.child} ref= {this.childRef}>child</div>
            </div>
         );
    }
}
 
export default Order;