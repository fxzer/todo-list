import React from "react";
import {nanoid} from 'nanoid';
import  './header.css'
export default class Header extends React.Component {
  // 回车添加任务
  handleKeyup =(event)=>{
      let { keyCode,target} = event
      let  {todoList} = this.props
      let content = target.value.trim() 
      if(keyCode !== 13) return
      if(target.value.trim() ==='') {
          alert('输入内容不能为空')
          return
      }
      //不能重复
      let isRepeat = todoList.some(todo => todo.content === content)
      if(isRepeat){
        alert('输入内容不能重复')
        return
      }
      let todoObj = { id:nanoid(),content,done:false}
      this.props.addTodo(todoObj)
      target.value = ''
  }
  //清空输入框
  handleClear=()=>{
    this.todoInput.value = ''
  }

  render() {
    return <div className="Header">
      <h1>TodoList</h1>
      <div className="input-box">
        <input
          type="text"
          className="todo-input"
          placeholder="请输入事项，按回车添加"
          onKeyUp={this.handleKeyup}
          ref={c => this.todoInput = c}
        />
        <i className="iconfont icon-icon_nav_clost_line" onClick={this.handleClear}></i>
      </div>
    </div>;
  }
}
