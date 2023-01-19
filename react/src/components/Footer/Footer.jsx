import {Component} from 'react'
import PropTypes from 'prop-types'
import './footer.css'
export default class Footer extends Component {
  static propTypes = {
    handleClear: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired,
  }
  handleClear = ()=>{
    this.props.handleClear()
  }
  checkAll=()=>{
    this.props.checkAll(!this.checkAllInput.checked)
  }
  render() {
    let { todoList }  = this.props
    let checkAcount = todoList.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    let total = todoList.length
    return (
      <footer>
        
        <div className="acount">
          <input type="checkbox" className='check-all'   ref={c=>this.checkAllInput = c}
          checked={checkAcount === total && total !==0 ? true :false} onChange={this.checkAll}  />
           <label className="toggle-check-all"  onClick={this.checkAll}  ></label>
          <span className='precent'>{checkAcount}/{total} </span></div>
        <span className="clear" onClick={this.handleClear}>清空已完成</span>
      </footer>
    );
  }
}
