import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

class DeleteMeal extends Component {
    removeItem(event){
        this.props.removeMeal(meal);
    }

    render(){
        return(
            <ul>
                {this.props.meals.map((meal) => {
                    return <li onClick={() => { this.removeItem(meal)}} key={meal}>{ meal }</li>
                })}
            </ul>
        );

    }
}

export default DeleteMeal;

