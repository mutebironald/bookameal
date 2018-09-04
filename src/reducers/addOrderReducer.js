const initialState ={
    message: '',
    error: null,
}

export default function addOrderReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_ORDER': {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
