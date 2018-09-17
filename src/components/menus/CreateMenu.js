import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import "../.././App.css"

import { addMenuRequest } from '../../actions/addMenuRequest';


export class CreateMenu extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        meal_id :'',
        day: ''
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});

    }

    onSubmit(event){
        event.preventDefault();
        // console.log(this.state, "the thingly state")
        if (this.state.meal_id.trim()){
            this.props.addMenuRequest(this.state);
            this.setState({meal_id:'', day: ''})
        }
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label className="control-label">Meal Id</label>
                    <input
                        value={this.state.meal_id}
                        onChange={this.onChange}
                        type="number"
                        name="meal_id"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Day</label>
                    <input
                        value={this.state.day}
                        onChange={this.onChange}
                        type="text"
                        name="day"
                        className="form-control"
                    />
               
                    
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-sm btn-success">
                        Create Menu
                    </button>
                </div>

            </form>
        );
    }
}
CreateMenu.propTypes = {
    addMenuRequest: PropTypes.func.isRequired
}

export default connect (null, {addMenuRequest})(CreateMenu);
