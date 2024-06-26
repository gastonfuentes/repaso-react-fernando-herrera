import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    /*  {
         id: new Date().getTime(),
         description: 'planear viaje a bs as',
         done: false,
     }, */
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const ToddoApp = () => {

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


    return (
        <>
            <h1>ToddoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} deleteTodo={deleteTodo} />

                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={onNewTodo} />

                </div>
            </div>

        </>
    )
}
