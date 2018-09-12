import axios from 'axios';
import instance from '../actions/instance';

export default function addMealRequest(data) {
    return function(dispatch){
        return instance.post(`/api/v1/meals`, data, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            console.log(response.data)
            dispatch({ type: "ADD_MEAL", payload: data});
            return { addMeal: true, message: "You have successfully created a meal"};
        })
        .catch(error => {
            return {addMeal: false, message: "Invalid Meal name or Price"};
        })
    }

}
