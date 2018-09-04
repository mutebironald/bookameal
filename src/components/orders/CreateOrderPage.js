import React, { Component  } from "react";
import CreateOrder from "./CreateOrder";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addMealRequest } from '../../actions/addMealRequest';  

class CreateOrderPage extends Component{
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
