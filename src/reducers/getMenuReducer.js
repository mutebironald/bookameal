const initialState ={
    message:'',
    error: null
}

export default function getMenuReducer(state=initialState, action){
    switch(action.type){
        case "GET_MENU":{
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
