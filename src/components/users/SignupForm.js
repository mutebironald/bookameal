import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/userSignupRequest'

import { FormErrors } from '../../FormErrors'
import '../.././App.css'
import '../.././index.css'

import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,NavLink,
  } from 'reactstrap';



    const selectedStyle = {
        backgroundColor: "white",
        color: "slategasy"
      }

class SignupForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        username: '',
        email:'',
        password:'',
        is_admin: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    componentDidMount(){
        let green = { background: 'green', text: "white" };
        notify.show("Sign Up", "custom", 1000, green)

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    onSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        this.props.userSignupRequest(this.state)
        .then(response => {
            if(response.signedUp){
                toastr.success(response.message)
                this.props.history.push("/login");
            }
            else{
                toastr.error(response.message)
            }
        })
    }
    render(){
        return (
            
            <div>

            <Navbar color="success" light expand="md">
              <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavLink href='/signup' activeStyle={selectedStyle}>Signup</NavLink>
                    <NavLink href='/login' activeStyle={selectedStyle}>login</NavLink>
                  </Nav>      
              </Collapse>
            </Navbar>

            

            <div className="wrapper">


            <form onSubmit={this.onSubmit} className="form-signin">
            <Notifications/>
                <h1 className="text-center">Register</h1>
                <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
                </div>

                <div className="form-group">
                    <label className="control-label"><strong>Username</strong></label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                    />
                </div>

                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label className="control-label"><strong>Email</strong></label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label"><strong>Password</strong></label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                        minLength="6"
                        required
                    />
                </div>

                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label className="control-label"><strong>Admin</strong></label><br/><br/>
                     <fieldset id="is_admin" onChange={this.onChange}>&emsp;
                        <label><strong>True</strong></label>&emsp;
                            <input type="checkbox" value="True" className="radio" name="is_admin" />&emsp;
                    </fieldset>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-success" disabled={!this.state.formValid}>
                        Signup
                    </button>
                </div>

            </form>


            </div>
            </div>
            
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect (null, {userSignupRequest})(SignupForm);
