import React, { Component } from 'react';
import PropTypes  from 'prop-types'
import './item.css'
class Item extends Component {
    static propTypes = {
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    handleCheck=(id)=>{
        this.props.updateTodo(id)
    }
    handleCheck1=(id)=>{
        console.log('id: ', id);
    }
    // 删除
    handleDelete =(id)=>{
        if(window.confirm('确定删除吗？')){
			this.props.deleteTodo(id)
		}
    }
    render() {
        let { id,content,done } = this.props
        return (
            <div id='Item' className='Item'>
                <li className="todo" >
                    <input type="checkbox" className="toggle" checked={done} onChange={()=>{this.handleCheck1(id)}} />
                    <label className="toggle-style" onClick={()=>this.handleCheck(id)} ></label>
                    <label className="todo-content" > {content}</label>
                    {/* <input type="text" className="input-content"  /> */}
                    {/* <i className="iconfont icon-edit" ></i> */}
                    <i className="iconfont icon-icon_nav_clost_line" onClick={()=> this.handleDelete(id) }  ></i>
                </li>
            </div>
        );
    }
}

export default Item;
