import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMealRequest } from '../../actions/updateMealRequest'
import '../.././App.css'

import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';
export class UpdateMealForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        name :'',
        price:''
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }
    
    onSubmit(event){
        event.preventDefault();
        this.props.updateMealRequest(this.props.id, this.state)
        .then(response => {
            if(response.updatedMeal){
                toastr.success(response.message)
            }
            else{
                toastr.error(response.message)
            }
        });


        this.setState({
            name:'',
            price:''
        })
    }

    componentDidMount(){
        let green ={ background: 'green', text: 'white'};
        notify.show("Update Meal", "custom", 5000, green)
    }

    componentWillMount(){
        this.setState({ name: this.state.name, price: "7000" })
    }


    render(){
        const meal = this.props 
        return (
            <form onSubmit={this.onSubmit}>
            <Notifications/>
                <h1>Meals</h1>

                <div className="form-group">
                    <label className="control-label" >Name</label>
                    <input
                        placeholder={this.props.name}
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                </div>


                <div className="form-group">
                    <label className="control-label">Price</label>
                    <input
                        placeholder={this.props.price}
                        onChange={this.onChange}
                        type="text"
                        name="price"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-success">
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
