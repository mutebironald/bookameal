const initialState ={
    message: '',
    error: null
}

export default function getMealReducer(state=initialState, action){
    switch(action.type){
        case "ADD_MEAL":{
            return{
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
