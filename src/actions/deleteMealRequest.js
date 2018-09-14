import axios from 'axios'
import instance from '../actions/instance';


export default function deleteMealRequest(meal_id){
    
    return function(dispatch){

    return instance.delete(`/api/v1/meals/` + meal_id)
    .then(response => {
        dispatch({ type: "DELETE_MEAL", meal_id});
        return {deletedMeal: true, message: response};
    })
    .catch(error => {
        return {deletedMeal: false, message: "The meal specified is not present"};
    })
}
}
