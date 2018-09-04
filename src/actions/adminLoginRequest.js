import axios from 'axios';

export function adminLoginRequest(data){
    return function(dispatch){
        console.log("This is an Administrator", data)
        console.log(axios.post(`/auth/admin/login`, data))

        return axios.post(`/auth/admin/login`, data)
        .then(res => {
            console.log(res.data.message)
            console.log("here here", res.data.access_token)

            localStorage.setItem("Authorization", res.data.access_token)


            dispatch({ type: "LOGIN_ADMIN", payload: data});
            return {loggedIn: true, message: res.data.message, admin: res.data.admin};
        })
        .catch(error =>{
            console.log("errors", error);
            return {loggedIn: false, message: "Please Signup then login", admin: "False"};
        })
    }
}
