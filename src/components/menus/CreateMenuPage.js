import React, {Component} from "react";
import CreateMenu from "./CreateMenu";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addMealRequest } from '../../actions/addMealRequest';  

export class AddMenuPage extends Component{
    render(){
        const { addMealRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <CreateMenu addMealRequest={addMealRequest}/>
                </div>
            </div>
        );
    }
}



AddMenuPage.propTypes = {
    addMealRequest: PropTypes.func.isRequired
}



export default connect( null , {addMealRequest}) (AddMenuPage);
