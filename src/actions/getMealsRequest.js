import axios from 'axios';
import instance from '../actions/instance';

export default function getMealsRequest(){
    return function(dispatch){

        return instance.get('/api/v1/meals')
        .then(response => {
            dispatch({ type: "GET_MEALS"});
            return {getMeals: true, message: "Meals Present"};

        })
        .catch(error => {
            return {getMeals: false, message: "Invalid request"}
        })
    }
}
