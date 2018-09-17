import axios from 'axios'
import instance from '../actions/instance';


export default function deleteMealRequest(meal_id){
    
    return function(dispatch){

    return instance.delete(`/api/v1/meals/` + meal_id, {headers:{"Authorization": localStorage.getItem('Authorization')}})
    .then(response => {
        // console.log("response.data")
        dispatch({ type: "DELETE_MEAL", meal_id});
        return {deletedMeal: true, message: response};
    })
    .catch(error => {
        // console.log("error.response.data")
        return {deletedMeal: false, message: "The meal specified is not present"};
    })
}
}
