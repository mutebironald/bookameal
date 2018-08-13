import React, { Coponent  } from "react";
import AddMealForm from "./AddMealForm";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addMealRequest } from '../../actions/addMealRequest';  
// import { addMeal } from './actions';

class AddMealPage extends Component{
    render(){
        const { addMealRequest } = this.props; 
        // const { addMeal } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                

                <AddMealForm addMealRequest={addMealRequest}/>

                {/* <AddMealForm addMeal={addMeal}/> */}

                </div>
            </div>
        );
    }
}

AddMealPage.propTypes = {
    addMealRequest: PropTypes.func.isRequired
}

// AddMealPage.propTypes = {
//     addMeal: PropTypes.func.isRequired
// }

export default connect( null , {addMealRequest}) (AddMealPage);

// export default connect( null, {addMeal}) (AddMealPage);
