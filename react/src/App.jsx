import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import React, { Component } from "react";

class App extends Component {
  state = {
    todoList: [
      { id: "1", content: "吃饭", done: true },
      { id: "2", content: "睡觉", done: false },
      { id: "3", content: "打代码", done: true },
    ],
  };
  //  添加任务
  addTodoDone = (todoObj) => {
    let { todoList } = this.state;
    this.setState({ todoList: [...todoList, todoObj] });
  };
  //修改状态
  updateTodo = (id) => {
    let { todoList } = this.state;
    let newTodoList = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.setState({ todoList: newTodoList });
  };

  //删除任务
  deleteTodo = (id) => {
    let { todoList } = this.state
    let newTodoList = todoList.filter(todo => todo.id !== id)
    this.setState({todoList:newTodoList})
  };
  // 清除已完成
  handleClear = ()=>{
    let { todoList } = this.state
    let newTodoList = todoList.filter(todo => {
      return !todo.done
    })
    this.setState({todoList:newTodoList})
  }
  handleCheckAll=(val)=>{
    let { todoList } = this.state;
   let newTodoList =  todoList.map(todo =>{
      return {...todo,done:val}
    })
    this.setState({todoList:newTodoList})
  }
  render() {
    let { todoList } = this.state;
    return (
      <div className="App">
        <Header addTodo={this.addTodoDone} todoList={todoList} />
        <List
          todoList={todoList}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer handleClear={this.handleClear} checkAll={this.handleCheckAll}  todoList={todoList}/>
      </div>
    );
  }
}

export default App;
