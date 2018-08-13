import { USER_LOGIN, ADD_FLASH_MESSAGE, successful_login,  ADD_MEAL, UPDATE_MEAL, GET_MEALS, DELETE_MEAL } from '../actions/types';

export default function postReducer( state = [], action){
    switch (action.type) {
        case ADD_MEAL:
            return [...state, action.payload];
        case DELETE_MEAL:
            return state.filter(meal => meal.id !== action.payload.id);
            case GET_MEALS:
            return action.meals;
        default:
            return state;
    }
}
