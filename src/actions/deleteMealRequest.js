import axios from 'axios'
export function deleteMealRequest(meal_id){
    console.log("you are deleting")
    
    return function(dispatch){

    return axios.delete(`/api/v1/meals/` + meal_id)
    .then(response => {
        dispatch({ type: "DELETE_MEAL", meal_id});
        return {deletedMeal: true, message: response};
    })
    .catch(error => {
        console.log("error", error)
        return {deletedMeal: false, message: "The meal specified is not present"};
    })
}
}
