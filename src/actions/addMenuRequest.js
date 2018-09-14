import axios from 'axios'
import instance from '../actions/instance';


export const addMenuRequest = (meal_id) => {
    instance.post(`/api/v1/menu`, meal_id, {
            headers: {
                "Authorization": localStorage.getItem('Authorization')
            }
        })
        .then(response => {
            return response
        })

        .catch(error => {
            console.log(error)
        })

}
