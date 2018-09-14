import axios from 'axios';
import instance from '../actions/instance';

export default function adminSignupRequest(data){
    return function(dispatch){
        return instance.post(`/auth/admin/register`, data)
        .then(response => {
            dispatch({ type: "SIGNUP_ADMIN", payload: data});
            return {signedUp: true, message: "You have successfully registered your resturant"};
        })
        .catch(error => {
            return {signedUp: false, message: "Fill all your details correctly"};
        })
    }
}
