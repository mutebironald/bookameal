import axios from 'axios'
import instance from '../actions/instance';

export default function addMealRequest(data) {
    return function(dispatch){
        return instance.post(`/api/v1/menu`, data, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            return response
   
        })
        .catch(error => {
            return error
        })
    }

}
