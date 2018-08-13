export const ADD_MEAL = 'ADD_MEAL';

let nextMealId = 0;

export function addMeal(text) {
    return {
        type: ADD_MEAL,
        id: nextMealId++,
        text
    };
}
