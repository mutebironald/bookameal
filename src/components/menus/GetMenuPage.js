import React, { Component  } from "react";
import GetMenu from "./GetMenu";

class GetMenuPage extends Component{

    componentWillMount(){
        console.log("GetMenuPage")
        console.log(this.props)
    
    }
    render(){
        return(
            // <div className="card mt-2" style={{ width: "12rem", height:"8rem"}}>
            <div className="card mt-2">
                <div className="row text-muted">
                    <div className="col-md-5 meal-data">
                    <strong>Meal:</strong>{this.props.item.name}
                    </div>
                    <div className="col-md-4 meal-data">
                    <strong>Price:</strong>{this.props.item.price}
                    </div>
                    <div className="col-md-3 p-2">
                    <br/><br/>
                    {/* <button
                        className="btn btn-danger">
                        delete
                    </button> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default GetMenuPage;
