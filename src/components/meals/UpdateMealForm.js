import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMealRequest } from '../../actions/updateMealRequest'

class UpdateMealForm extends React.Component {
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

    onSubmit(e){
        e.preventDefault();
        console.log("your first update")
        console.log(JSON.stringify(this.state));
        console.log(this.state)

        this.props.updateMealRequest(1, this.state);
        console.log("Am updating this meal")
        // history.push('/login');
    }
    render(){
        const meal = this.props 
        console.log(meal)
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Meals</h1>

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
                    <button className="btn btn-primary btn-lg">
                        Update Meal
                    </button>
                </div>

            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

UpdateMealForm.propTypes = {
    updateMealRequest: PropTypes.func.isRequired
}

export default connect (null, {updateMealRequest})(UpdateMealForm);
