import {successful_login} from '../actions/types'

const initialstate = {
    message:'',
    token:'',
    error: null
}

export default function userReducer(state = initialstate, action){
    switch(action.type){
        case successful_login:{
            return{
                ...state,
                message:action.payload
            }
        }

    }

    return state
}
