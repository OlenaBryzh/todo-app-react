import React from "react"

function TodoItem(props) {
  const doneStyle = {
    textDecoration: "line-through",     
  }
  return (
    <div className="todo-items">
      <input type="checkbox" className="hidden"
      checked={props.item.completed}
      onChange={() => props.handleChange(props.item.id)}/>
      <label style={props.item.completed ? doneStyle : null}>{props.item.text}</label>
    </div>
  )
}

export default TodoItem
