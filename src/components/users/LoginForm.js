import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLoginRequest } from '../../actions/userLoginRequest'
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


class LoginForm extends React.Component {
    constructor(props, context){
    super(props);
    this.state = {
        email:'',
        password:'',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        let green = { background: 'green', text: "white" };
        notify.show("login", "custom", 3000, green)
    }

    componentWillMount(){
        console.log("redux", this.props)
    }

    onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
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

    
    isEmpty(str){
        return(!str || 0 === str.length)
    }

    onSubmit(event){
        event.preventDefault();
        console.log("hello from login")
        console.log(JSON.stringify(this.state));


        this.props.userLoginRequest(this.state)
        .then(response => {
            if(response.loggedIn){
                if(response.admin === "True"){
                    console.log("we are here")
                    toastr.success(response.message)
                    this.props.history.push('/getMeals')
                }
                else{
                    console.log("Come on people", response.admin)
                    toastr.success(response.message)
                    this.props.history.push('/UserMenu')

                }
            }
            else{
                toastr.error(response.message)
            }
        });
        this.setState({
            email:'',
            password:'',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
            });
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

            <div class="wrapper">


            <form onSubmit={this.onSubmit} class="form-signin">
            <Notifications/>
                <h6 class="text-center"><strong>Login</strong></h6>
                <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors}  />
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
                        minlength="5"
                        required
                    />
                </div>
                

                <div className="form-group">
                    <button className="btn btn-primary btn-success" disabled={!this.state.formValid}>
                        Login
                    </button>
                </div>

            </form>
            </div>

            </div>
            
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
}
LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loginData: state.authData.message
})


export default connect (mapStateToProps, {userLoginRequest})(LoginForm);