import axios from 'axios';

export function getMealsRequest(){
    return function(dispatch){
        // console.log(data)

        return axios.get('/api/v1/meals')
        .then(response => {
            // console.log(response.dtata)
            dispatch({ type: "GET_MEALS"});
            return {getMeals: true, message: "Meals Present"};

        })
        .catch(error => {
            return {getMeals: false, message: "Invalid request"}
        })
    }
}
