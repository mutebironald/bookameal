import React, { Component  } from "react";
import GetOrders from "./GetOrders";
class GetOrdersPage extends Component{
    render(){
        return(
            <div className="card mt-1">
                <div className="row text-muted">
                    <div className="col-md-3 meal-data">
                    <strong>Order:</strong>{this.props.item.id}
                    </div>
                    <div className="col-md-5 meal-data">
                    <strong>Name:</strong>{this.props.item.name}
                    </div>
                    <div className="col-md-3 p-2">
                    <a href="/createOrder" id = {this.props.item.id} className="btn btn-info btn-sm" role="button" aria-pressed="true">Edit Order</a>
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

export default GetOrdersPage;
