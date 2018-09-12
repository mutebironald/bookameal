import axios from 'axios';
import instance from '../actions/instance';

export  default function adminLoginRequest(data){
    return function(dispatch){
        console.log("This is an Administrator", data)
        console.log(instance.post(`/auth/admin/login`, data))

        return instance.post(`/auth/admin/login`, data)
        .then(res => {
            console.log("here")
            console.log(res.data.message)
            console.log("here here", res.data.access_token)

            localStorage.setItem("Authorization", res.data.access_token)


            dispatch({ type: "LOGIN_ADMIN", payload: data});
            return {loggedIn: true, message: res.data.message, admin: res.data.admin};
        })
        .catch(error =>{
            return {loggedIn: false, message: "Please Signup then login", admin: "False"};
        })
    }
}
