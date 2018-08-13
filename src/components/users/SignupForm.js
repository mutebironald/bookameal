import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/userSignupRequest'

class SignupForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
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
        console.log("=====")
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        // axios.post('/api/users', {user: this.state}); 
        this.props.userSignupRequest(JSON.stringify(this.state));
        console.log("You Clicked Me")
    }
    render(){
        return (
            <form onSubmit={this.onSubmit} className="form-2">
                <h1>Welcome to Bookameal</h1>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">is_admin</label>
                    <input
                        value={this.state.is_admin}
                        onChange={this.onChange}
                        type="text"
                        name="is_admin"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="text"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>

            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect (null, {userSignupRequest})(SignupForm);
