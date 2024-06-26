
const initialState = [{
    id: 1,
    todo: 'recolectar algo',
    done: false
}];


const todoReducer = (state = initialState, action = {}) => {


    if (action.type === '[ADDTODO]') {
        return [...state, action.payload]
    }


    return state;

}


let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'ir a buscar algo',
    done: false
}

const addTodoAction = {
    type: '[ADDTODO]',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);