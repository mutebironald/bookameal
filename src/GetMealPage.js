import React, { Component  } from "react";
import GetMeals from "./GetMeals";
class GetMealPage extends Component{

    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="card mt-2">
                <div className="row text-muted">
                    <div className="col-md-5 meal-data">
                    <strong>Meal:</strong>{this.props.item.name}
                    </div>
                    <div className="col-md-4 meal-data">
                    <strong>Price:</strong>{this.props.item.price}
                    </div>
                    <div className="col-md-3 p-2">
                    <a href="/updateMeal" id = {this.props.item.id} className="btn btn-info btn-sm" role="button" aria-pressed="true">Edit meal</a>
                    <br/><br/>
                    <button
                        className="btn btn-danger">
                        delete
                    </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default GetMealPage;
