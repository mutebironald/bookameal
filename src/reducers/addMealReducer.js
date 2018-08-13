const initialState = {
    message: '',
    error: null,

}

export default function addMealReducer(state=initialState, action){
    switch (action.type){
        case ADD_MEAL: {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
