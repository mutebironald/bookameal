import axios from 'axios';

export function addOrderRequest(data){
    return function(dispatch){

        return axios.post(`/api/v1/orders`, data, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            console.log(response.data)
            console.log("watch me nae nae",response)
            dispatch({ type: "ADD_ORDER", payload: data });
            return { addOrder: true, message: response.data.message};
        })
        .catch(error => {
            console.log("errors", error);
            return {addOrder: false, message: "An order cannot be logged at this time"}
        })
    }
}
