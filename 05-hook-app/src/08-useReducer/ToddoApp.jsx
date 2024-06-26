import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'planear viaje a bs as',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'parchar la bicicleta',
        done: false,
    }
]

export const ToddoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)


    return (
        <>
            <h1>ToddoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {todos.map(t => (
                            <li key={t.id} className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">Item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>

                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    <form >
                        <input
                            type="text"
                            placeholder="que hay que hacer"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >Agregar</button>
                    </form>
                </div>
            </div>

        </>
    )
}
