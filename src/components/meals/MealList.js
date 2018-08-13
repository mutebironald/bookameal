import React, { Component } from 'react';
import Meal from './Meal';

export default class MealList extends Component {
    render(){
        return(
            <ul>
                { this.props.meals.map(meal =>
                    <Meal
                        key = {meal.id}
                        {...meal}
                    />
                    )}
            </ul>
        )
    }
}
