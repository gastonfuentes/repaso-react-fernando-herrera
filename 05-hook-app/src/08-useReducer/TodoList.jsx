import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'

export const TodoList = ({ todos = [], deleteTodo }) => {


    return (
        <ul className="list-group">
            {todos.map(todo => (

                <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />

            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func
}

