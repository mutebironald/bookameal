import React, { Component } from 'react';
import './index.css';
import axios from "axios";

import deleteMealRequest from './actions/deleteMealRequest';

class GetMeals extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            meals: [],
        };
        
        //delete handler
        this.deleteMeal = this.deleteMeal.bind(this);
        

    }

    deleteMealRequest(e){
        // if (confirm('Are you sure ?')){
        //     this.props.actions.deleteMeal(this.state.meal) 
        // }
        this.props.deleteMealRequest(this.state.meal)
    }

    componentDidMount(){
        let token = localStorage.getItem("token")
        let headers = {
            Authorization: token
        }
        axios.get("http://127.0.0.1:5000/api/v1/meals",headers)
        .then(response=>{
            this.setState({meals:response.data.Meals})
            console.log(this.state)
            console.log(response.data)
        }) 
        .catch(error=>{
            console.log(error)
        })
 
    }

    render() {
        console.log(this.state.meals)
        const meals = this.state.meals.map(meal=>(
            <div className="card mt-2">
                <div className="row text-muted">
                    <div className="col-md-5 meal-data">
                    <strong>Meal:</strong>{meal.name}
                    </div>
                    <div className="col-md-4 meal-data">
                    <strong>Price:</strong>{meal.price}
                    </div>
                    <div className="col-md-3 p-2">
                    <a href="/updateMeal" id = {meal.id} className="btn btn-info btn-sm" role="button" aria-pressed="true">Edit meal</a>
                    <br/><br/>
                    {/* <a href="" id = {meal.id} class="btn btn-danger btn-sm" role="button" aria-pressed="true"> Delete </a> */}
                    <button
                        onClick={ this.deleteMeal }
                        className="btn btn-danger">
                        delete
                    </button>
                    </div>
                </div>
            </div>
        ))
        return(
            <div className="container">
                <div className="meals-container">{meals}</div>
            </div>
            // <div className="container2">
            // <div className="container1">

            // {this.state.meals}
            // </div>
            // </div>

        )
    }
}

GetMeals.propTypes = {
    deleteMealRequest: PropTypes.func.isRequired
}

export default GetMeals;





// fetch(`http://127.0.0.1:5000/api/v1/meals`,headers)
// .then( results => {
//     console.log(results)
//     return results.json();
// })
// .then(data => {
//     console.log('failed')
//     let meals = data.meals.map((meal) => {
//         return(
//             <div key={meal.results}>
                    
//             </div>

//         )
//     })
//     this.setState({ meals: meals});
//     console.log("state", this.state.meals);
// })
