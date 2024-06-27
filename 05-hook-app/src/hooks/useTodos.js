import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}



export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const onNewTodo = (todo) => {
        const action = {
            type: 'ADDTODO',
            payload: todo
        }

        dispatch(action)
    }

    const deleteTodo = (id) => {
        const action = {
            type: 'DELETETODO',
            payload: id
        }

        dispatch(action)
    }

    const togleTodo = (id) => {
        const action = {
            type: 'TOGLETODO',
            payload: id
        }

        dispatch(action)
    }


    return {
        todos,
        togleTodo,
        deleteTodo,
        onNewTodo
    }
}
