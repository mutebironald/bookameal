const initialState = {
    message: '',
    error: null
}

export default function deleteMealReducer(state=initialState, action){
    switch(action.type){
        case "DELETE_MEAL": {
            return {
                ...state,
                message: action.payload
                
            }
        }
    }
    return state
}
