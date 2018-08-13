import React, { Coponent  } from "react";
import UpdateMealForm from "./UpdateMealForm";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { updateMealRequest } from '../../actions/updateMealRequest';  

class UpdateMealPage extends Component{
    render(){
        const { updateMealRequest } = this.props; 
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                

                <UpdateMealForm updateMealRequest={updateMealRequest}/>

                </div>
            </div>
        );
    }
}

UpdateMealPage.propTypes = {
    updateMealRequest: PropTypes.func.isRequired
}

export default connect( null , {updateMealRequest}) (UpdateMealPage);
