/* import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer" */
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

/* const initialState = [
    
] */

/* const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
 */
export const ToddoApp = () => {

    /* const [todos, dispatch] = useReducer(todoReducer, initialState, init) */


    /* useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]) */



    /*  const onNewTodo = (todo) => {
         const action = {
             type: 'ADDTODO',
             payload: todo
         }
 
         dispatch(action)
     } */

    /*   const deleteTodo = (id) => {
          const action = {
              type: 'DELETETODO',
              payload: id
          }
  
          dispatch(action)
      } */

    /*  const togleTodo = (id) => {
         const action = {
             type: 'TOGLETODO',
             payload: id
         }
 
         dispatch(action)
     } */


    //se creo hook personalizado useTodos con toda la logica que esta comentada arriba    
    const { deleteTodo, onNewTodo, todos, togleTodo } = useTodos()


    return (
        <>
            <h1>ToddoApp: {todos.length}, <small>pendientes: {todos.filter(todo => todo.done === false).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} deleteTodo={deleteTodo} togleTodo={togleTodo} />

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
