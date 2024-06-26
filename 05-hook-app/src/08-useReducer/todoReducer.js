

export const todoReducer = (initialState = [], action) => {

    switch (action.payload) {
        case 'ABC':
            throw new Error('action.type = ABC toda no esta implementado')


        default:
            return initialState
    }

}