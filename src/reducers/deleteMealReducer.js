// const initialState = {
//     message: '',
//     error: null
// }

// export default function loginReducer(state=initialState, action){
//     switch (action.type){
//         case "LOGIN_USER": {
//             return {
//                 ...state,
//                 message: action.payload
//             }
//         }
//     }
//     return state
// }

import * as types from '../actions/types';
// import initialState from './i'
const initialState = {
    message: '',
    error: null
}

export default function deleteMealReducer(state=initialState, action){
    switch(action.type){
        case "DELETE_MEAL": {
            return {
                ...state,
                
            }
        }
    }
}

