import PropTypes from 'prop-types'

export const TodoItem = ({ todo, deleteTodo, togleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                onDoubleClick={() => togleTodo(todo.id)}
            >{todo.description}</span>
            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    togleTodo: PropTypes.func
}
