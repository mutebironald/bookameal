import axios from 'axios';
import instance from '../actions/instance';

export function userSignupRequest(data){
    return function(dispatch){
        return instance.post(`/auth/register`, data)
        .then(response => {
            dispatch({type: "SIGNUP_USER",payload: data});
            return {signedUp: true, message: "You have successfully signed up" };
        })
        .catch(error => {
            return {signedUp: false, message: "wrong email or password"};
        })

}
}
