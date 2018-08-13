import { combineReducers } from 'redux';
import { ADD_MEAL } from '../actions/mealAction';

function meal(state, action){
    switch (action.type) {
        case ADD_MEAL:
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

function meals(state = [], action) {
    switch(action.type) {
        case ADD_MEAL:
            return [
                ...state,
                meal(undefined, action)
            ]
        default:
            return state
    }
}

