import React, {useReducer, useState} from 'react';
import {initial, myReducer} from "../reducers/reducer"

const TodoList = () => {

    const [state, setState] = useState({
        name: "",
        completed: false,
        id: 0
    })
    const [todos, dispatch] = useReducer(myReducer, initial)


    const handleChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
          id: new Date()
        });
      };
    const toggleTodo = id => {
        dispatch({type: "TOGGLE", payload: id})
    }
    const addTodo = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: state})
    }
    console.log(todos)
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={state.name} onChange={handleChange} name="name" />
            </form>
            <button onClick={() => dispatch({type: "DELETE_ALL"})}>Delete</button>
            <div>
            {todos.map(todo => <p onClick={() => toggleTodo(todo.id)}>{todo.name}</p>)}

            </div>
        </div>
    );
};

export default TodoList;