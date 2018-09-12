import React, { Component  } from "react";
import CreateOrder from "./CreateOrder";

export class CreateOrderPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                

                <CreateOrder />

                </div>
            </div>
        );
    }
}

export default CreateOrderPage;
