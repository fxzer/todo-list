import {Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './list.css'
export default class List extends Component {
    static propTypes ={
        todoList:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }
  render() {
    let { todoList ,updateTodo,deleteTodo} = this.props
    return (
      <div id="Todos">
        <ul className="todo-list">
            { todoList.map(todo => {
                return <Item {...todo} key={todo.id}  updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            } )}
        </ul>
      </div>
    );
  }
}
