import React from 'react'
import axios from 'axios';

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('/ api/users', userData);
    }
}

export const login = userdata => dispatch => {
    let payload ={
        method:"POST",
        body: userdata,
        headers: {
            "Content-Type":"application/json"
        }
    };

    fetch(`https://bookameal-.herokuapp.com/apidocs/#!/Users/post_auth_login`, payload)
    .then(response => response.json())
    .then(data=>dispatch(
        {
        type:successful_login,
        payload:data
        }
    ))
    .catch(error=>error)
}
