import PropTypes from 'prop-types';
import React from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import toastr from 'toastr';
import '../.././App.css';
import '../.././index.css';
import { userSignupRequest } from '../../actions/userSignupRequest';
import { FormErrors } from '../../FormErrors';

    const selectedStyle = {
        backgroundColor: "white",
        color: "slategasy"
      }

export class SignupForm extends React.Component {
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

                <div className="form-group">
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

                <div className="form-group">
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
