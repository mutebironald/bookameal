const initialState = {
    message: '',
    error: null
}

export default function loginReducer(state=initialState, action){
    switch (action.type){
        case "LOGIN_USER": {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
