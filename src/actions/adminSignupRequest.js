import axios from 'axios'

export function adminSignupRequest(data){
    return function(dispatch){
        return axios.post(`/auth/admin/register`, data)
        .then(response => {
            console.log(response)
            dispatch({ type: "SIGNUP_ADMIN", payload: data});
            return {signedUp: true, message: "You have successfully registered your resturant"};
        })
        .catch(error => {
            return {signedUp: false, message: "Fill all your details correctly"};
        })
    }
}
