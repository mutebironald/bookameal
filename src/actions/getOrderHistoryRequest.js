
import axios from 'axios';

export function getOrderHistoryRequest(data){
    return function(dispatch){
        return axios.post(`api/v1/orders/users/`, data, {headers:{"Authorization": localStorage.getItem('Authorization')}} )
        .then(response => {
            console.log(response.data)
            dispatch({ type: "GET_ORDER", payload: data});
            return { getOrder: true, message: "you are attempting an add order"};

        })
        .catch(error => {
            console.log("errors", error);
            return {getOrder: false, message: "Invalid something"};
        })
    }
}