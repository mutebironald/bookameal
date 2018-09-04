import axios from "axios";

export function updateMealRequest(id, data){
    return function(dispatch){

    return axios.put("/api/v1/meals/" + id, data)
    .then(response =>{
        console.log(response)
        dispatch({ type: "UPDATE_MEAL", payload: data, id});
        return {updatedMeal: true, message: "You have successfully updated the meal"};
    })
    .catch(error =>{
        console.log(error.response.data)
        return {updatedMeal: false, message: "Wrong name or price"};
        
    })
}

}
