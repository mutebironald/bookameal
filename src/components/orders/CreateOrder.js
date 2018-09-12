import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import "../.././App.css"

import  addOrderRequest  from '../../actions/addOrderRequest';

import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';

export class CreateOrder extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        menu_id : this.props.id,

        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        
            console.log(this.state);
            let  data = {
                'menu_id': this.state.menu_id
            }
            this.props.addOrderRequest((data))
            .then(response => {
                if(response.addOrder){
                    toastr.success(response.message)
                }
                else{
                    toastr.error(response.message)
                }
            })

        this.setState({
            menu_id: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
            <Notifications/>

                <div className="form-group">
                    <label className="control-label">Menu Id</label>
                    <input
                        value={this.state.menu_id}
                        onChange={this.onChange}
                        type="number"
                        name="cow"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-success btn-sm">
                        Create Order
                    </button>
                </div>

            </form>
        );
    }
}
CreateOrder.propTypes = {
    addOrderRequest: PropTypes.func.isRequired
}


export default connect (null, {addOrderRequest})(CreateOrder);
