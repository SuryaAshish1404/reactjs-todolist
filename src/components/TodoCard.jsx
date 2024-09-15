import React from 'react'

export default function TodoCard(props) {
    const {handleEditTodo,handleDelteTodo,children,index} = props    
      return (
        <li className='todoItem'>
          {children}
          <div className="actionsContainer">
            <button onClick={() => handleEditTodo(index)}><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() =>{handleDelteTodo(index)}}><i className="fa-regular fa-trash-can"></i></button>
          </div>
        </li>
      )
}

