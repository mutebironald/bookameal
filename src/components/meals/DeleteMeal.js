import React, { Component } from 'react'
import '../../App.css';
import instance from '../../actions/instance';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteMealRequest } from '../../actions/deleteMealRequest'
import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';


export class DeleteMeal extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            meal_id: ''
        }
    }

    handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value});
}


    onSubmit(e){
    e.preventDefault();
    if (this.state.meal_id.trim() ){
    this.props.deleteMealRequest(this.state.meal_id)
    .then(response => {
        if(response.deletedMeal){
            toastr.success(response.message)
        }
        else{
            toastr.error(response.message)
        }
    });

    this.setState({
        meal_id:''
    })


    }
}

componentDidMount(){
    let green = { background: 'green', text: 'white'};
    notify.show("Delete Meal", "custom", 5000, green)
}

delete(e, index){
    e.preventDefault();
    }

    render(){
        return (
        <form onSubmit={this.onSubmit}>
        <Notifications/>
                <h4 className="text-muted">Delete Meal</h4>

                <div className="form-group">
                    <label className="control-label">Meal id</label>
                    <input
                        value={this.state.meal_id}
                        onChange={this.handleChange}
                        type="number"
                        name="meal_id"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-danger">
                        Delete Meal
                    </button>
                </div>

            </form>

        );

    }
}

DeleteMeal.propTypes = {
    deleteMealRequest: PropTypes.func.isRequired
}

export default   connect(null, {deleteMealRequest})(DeleteMeal);
