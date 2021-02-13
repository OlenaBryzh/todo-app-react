import React from "react"
import TodoItem from "./TodoItem.js"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
      this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          return {
          ...todo,
          completed: !todo.completed
          }
        }
           return todo
      })
        return {
          todos: updatedTodos
        }
      })
    }
    render () {
    const TodoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item}
    handleChange={this.handleChange}/>)
    return (
      <div className = "todo-list">
        <h1>My next weekend's todo list:</h1>
        {TodoItems}
      </div>
        
    )
  }
}

export default App
