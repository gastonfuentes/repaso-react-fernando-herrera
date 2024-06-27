import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'

export const TodoList = ({ todos = [], deleteTodo, togleTodo }) => {


    return (
        <ul className="list-group">
            {todos.map(todo => (

                <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} togleTodo={togleTodo} />

            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    togleTodo: PropTypes.func
}

