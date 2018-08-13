const initialState = {
    message: '',
    error: null,

}

export default function updateMealReducer(state=initialState, action){
    switch (action.type){
        case UPDATE_MEAL: {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state
}
