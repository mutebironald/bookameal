import axios from 'axios';

export function userSignupRequest(data){
    return function(dispatch){
        console.log("Test Action")
        console.log(data)
        // let payload = {
        //     method: "POST",
        //     body: data,
        //     headers: {
        //         "Content-Type": "application/json",

        //     }
        return axios.post(`/auth/register`, data)
        .then(response => {
            console.log("responding",response.data)
            dispatch({type: "SIGNUP_USER",payload: data});
            return {signedUp: true, message: "You have successfully signed up" };
        })
        .catch(error => {
            console.log('errors', error);
            return {signedUp: false, message: "wrong email or password"};
            // console.log('register error', error.response.data)
        })

}
}
