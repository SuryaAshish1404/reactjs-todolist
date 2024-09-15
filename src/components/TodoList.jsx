import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {handleEditTodo,handleDelteTodo,todos} = props
      return (
        <ul className='main'>
          {todos.map((todo,todoIndex) => {
            return(
                <TodoCard handleEditTodo = {handleEditTodo} handleDelteTodo = {handleDelteTodo} key = {todoIndex} index = {todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
          })}
        </ul>
      )
}
