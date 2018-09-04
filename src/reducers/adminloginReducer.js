const initialState = {
    message: '',
    error: null
}

export default function adminloginReducer(state=initialState, action){
    switch(action.type){
        case "LOGIN_ADMIN":{
            return{
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
