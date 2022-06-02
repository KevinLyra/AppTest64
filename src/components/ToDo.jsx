import React, { useState } from 'react'
import AddToDoForm from './AddToDoForm'
import { v4 } from 'uuid';

const ToDo = () => {

    const [todos, setTodos] = useState([
        {id: 1, todo:'Acheter du lait'},
        {id:2 , todo:'Acheter du pain'},
        {id: 3 , todo:'Acheter du fromage'}
    ])

    const [warning, setWarning] = useState(false)
   const myTodos = todos.map( todo2 => {
        return (
            <li className='list-group-item' key={todo2.id}>{todo2.todo}</li>
        )
    } )

    const addNewTodo = (newTodo) =>{

        if(newTodo !== ''){

            warning && setWarning(false)
            setTodos([
                ...todos, {
                    id: v4(),
                    todo: newTodo
                    }
                ])
            }else{
                setWarning(true)
            }
        }
        
        const warningMsg =  warning && <div class="alert alert-danger mt-2" role="alert">
            Miaou
        </div>

  return (
    <div>
        {warningMsg}
        <h1 className='text-center'> {todos.length} To-Do </h1> 
        <ul className='list-group'>
            {myTodos}
        </ul>
        <AddToDoForm addNewTodo={addNewTodo}/>
    </div>
  )
}

export default ToDo