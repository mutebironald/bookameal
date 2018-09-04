const initialState ={
    message: '',
    error: null
}

export default function getOrderReducer(state=initialState, action){
    switch(action.type){
        case "GET_ORDER":{
            return{
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
