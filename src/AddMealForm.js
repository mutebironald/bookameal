import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMealRequest } from './actions/addMealRequest'
import "./App.css"

// import { addMeal } from './actions/index';

class AddMealForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        name :'',
        price:''
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.name)
        console.log(e.target.value)
    }

    // onSubmit(e){
    //     e.preventDefault();
    //     // console.log("your first meal")
    //     // console.log(JSON.stringify(this.state));
    //     // let mealData = {
    //     //     "name": "katogo",
    //     //     "price": "1000"
    //     // }

    //     this.props.addMealRequest(JSON.stringify(this.state));
    //     // console.log("Am in mealing")
    //     // history.push('/login');
    // }

    onSubmit(e){
        e.preventDefault();
        if (this.state.name.trim() && this.state.price.trim()){
            console.log(this.state);
            this.props.addMealRequest(JSON.stringify(this.state));
            // this.props.addMeal(JSON.stringify(this.state));
            console.log(this.props)
        }
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-muted">Add meals</h4>

                <div className="form-group">
                    <label className="control-label">Name</label>
                    <input
                        value={this.state.name}
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                </div>


                <div className="form-group">
                    <label className="control-label">Price</label>
                    <input
                        value={this.state.price}
                        onChange={this.onChange}
                        type="text"
                        name="price"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block">
                        Add Meal
                    </button>
                </div>

            </form>
        );
    }
}
AddMealForm.propTypes = {
    addMealRequest: PropTypes.func.isRequired
}

// AddMealForm.propTypes ={
//     addMeal: PropTypes.func.isRequired
// }

export default connect (null, {addMealRequest})(AddMealForm);

// export default connect (null, {addMeal})(AddMealForm);
