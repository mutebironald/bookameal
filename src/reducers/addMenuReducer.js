const initialState ={
    message: '',
    error: null,
}

export default function addMenureducer(state=initialState, action){
    switch(action.type){
        case 'ADD_MENU': {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
