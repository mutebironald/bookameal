import { ADD_MEAL, UPDATE_MEAL, GET_MEALS, DELETE_MEAL } from './types';
import axios from 'axios';
import instance from './instance';

const apiUrl = 'http://localhost:5000';


export const addMeal = ({ name, price }) => {
    return (dispatch) => {
        return instance.post(`${apiUrl}/api/v1/meals`, { name, price })
        .then(response => {
            dispatch(addMealSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addMealSuccess = (data) => {
    return {
        type: ADD_MEAL,
        payload: {
            id: data.id,
            name: data.name,
            price: data.price
        }
    }
};

export const deleteMealSuccess = id => {
    return {
        type: DELETE_MEAL,
        payload: {
            id
        }
    }
}

export const deleteMeal = id => {
    return (dispatch) => {
        return instance.delete(`${apiUrl}/api/v1/meals/${id}`)
        .then(response => {
            dispatch(deleteMealSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};


export const getMeals = (meals) => {
    return {
        type: GET_MEALS,
        meals
    }
};

export const getAllMeals = () => {
    return (dispatch) => {
        return instance.get(`${apiUrl}/api/v1/meals`)
        .then(response => {
            dispatch(getMeals(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}; 
