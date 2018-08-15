import React, { Component } from 'react';
import './index.css';

import GetMealPage from './GetMealPage';

class GetMeals extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                meals:
                    [
                        {
                            "id": "1",
                            "name": "Rice",
                            "price": "4000",
                        },
                        {
                            "id": "2",
                            "name": "Posho",
                            "price": "3000",
                        },
                        {
                            "id": "3",
                            "name": "Fries",
                            "price": "7000",
                        },
                        {
                            "id": "4",
                            "name": "kikomando",
                            "price": "1500",
                        },
                        {
                            "id": "5",
                            "name": "rivers",
                            "price": "3450",
                        }
                    ]
                
            }
        };
        

    render() {
        return (
            <div>
                {this.state.meals.map((item) => (<GetMealPage item={ item } />))}
            </div>
        );
    }
}
export default GetMeals;
