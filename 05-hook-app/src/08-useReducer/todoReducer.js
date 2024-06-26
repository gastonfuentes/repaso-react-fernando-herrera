

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADDTODO':
            return [...initialState, action.payload];

        case 'DELETETODO':
            return initialState.filter(todo => todo.id !== action.payload);


        default:
            return initialState
    }

}