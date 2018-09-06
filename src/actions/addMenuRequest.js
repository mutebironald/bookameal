import axios from 'axios'
export const addMenuRequest = (meal_id) => dispatch => {
    axios.post(`/api/v1/menu`, meal_id,  {headers:{"Authorization": localStorage.getItem('Authorization')}})
    .then(response => response)
    .then(data => console.log(data))
    .catch(error => console.log(error))

}


