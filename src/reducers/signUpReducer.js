const initialState = {
    message: '',
    error: null,

}

export default function signupReducer(state=initialState, action){
    switch (action.type){
        case "SIGNUP_USER": {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
