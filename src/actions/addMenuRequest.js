import axios from 'axios'
import instance from '../actions/instance';


export const addMenuRequest = (meal_id) => dispatch => {
    instance.post(`/api/v1/menu`, meal_id,  {headers:{"Authorization": localStorage.getItem('Authorization')}})
    .then(response => response)
    .then(data => console.log(data))
    .catch(error => console.log(error))

}


