import axios from "axios";
import instance from '../actions/instance';

export default function updateMealRequest(id, data){
    return function(dispatch){

    return instance.put("/api/v1/meals/" + id, data, {headers:{"Authorization": localStorage.getItem('Authorization')}})
    .then(response =>{
        dispatch({ type: "UPDATE_MEAL", payload: data, id});
        return {updatedMeal: true, message: "You have successfully updated the meal"};
    })
    .catch(error =>{
        return {updatedMeal: false, message: "Wrong name or price"};
        
    })
}

}
