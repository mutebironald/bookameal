import axios from 'axios';
import instance from '../actions/instance';

export default function userLoginRequest(data) {
    return function(dispatch){
        console.log("Test Action")

        return instance.post(`/auth/login`, data)
        .then(res => {

            console.log("this is the response", res.data.access_token)

            localStorage.setItem('Authorization',res.data.access_token )

            console.log(res.data.message)
            console.log("blabla", res.data.admin)
            dispatch({ type: "LOGIN_USER", payload: data});
            return {loggedIn: true, message: res.data.message, admin: res.data.admin};
        })
        .catch(error=>{
            console.log('errors', error);
            return {loggedIn: false, message: "Please Signup then login", admin: "False"};

        })
        }
}
