import React, { useState,useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos,setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')

    function persistData(newList){
      localStorage.setItem('todos',JSON.stringify({
        todos: newList
      }))
    }

    function handleAddTodos(newTodo){
      const newTodoList = [...todos,newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDelteTodo(index){
      const newTodoList = todos.filter((todo,todoIndex) => {
        return todoIndex != index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleEditTodo(index){
      const valueToBeEdited = todos[index];
      setTodoValue(valueToBeEdited)
      handleDelteTodo(index)
    }

    useEffect(() => {
      if(!localStorage) return
      let localTodos = localStorage.getItem('todos')
      if(!localTodos) return
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    },[])

  return (
    <main>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}/>
      <br/>
      <TodoList handleEditTodo = {handleEditTodo} handleDelteTodo = {handleDelteTodo} todos={todos}/>
    </main>
  )
}
