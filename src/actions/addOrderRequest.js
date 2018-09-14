import axios from 'axios';
import instance from '../actions/instance';

export default function addOrderRequest(data){
    return function(dispatch){

        return instance.post(`/api/v1/orders`, data, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            dispatch({ type: "ADD_ORDER", payload: data });
            return { addOrder: true, message: response.data.message};
        })
        .catch(error => {
            return {addOrder: false, message: "An order cannot be logged at this time"}
        })
    }
}


