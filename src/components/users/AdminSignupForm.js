import PropTypes from 'prop-types';
import React from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import toastr from 'toastr';
import '../.././App.css';
import '../.././index.css';
import  adminSignupRequest  from '../../actions/adminSignupRequest';
        
const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
}

export class AdminSignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            resturant: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})   
    }

    componentDidMount(){
        let green = { background: 'green', text: "white" };
        notify.show("Sign Up", "custom", 1000, green)

    }

    onSubmit(event){
        event.preventDefault();
        this.props.adminSignupRequest(this.state)
        .then(response => {
            if(response.signedUp){
                toastr.success(response.message)
                this.props.history.push("/adminlogin");
            }
            else{
                toastr.error(response.message)
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar color="success" light expand="md">
                <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavLink href='/adminregister' activeStyle={selectedStyle}>Signup</NavLink>
                    <NavLink href='/adminlogin' activeStyle={selectedStyle}>Login</NavLink>
                    </Nav>      
                </Collapse>
                </Navbar>



                <form onSubmit={this.onSubmit} class="form-signin">
            <Notifications/>
                <h1 class="text-center">Register</h1>
                <div className="panel panel-default">
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
                    <label className="control-label"><strong>Resturant</strong></label>
                    <input
                        value={this.state.resturant}
                        onChange={this.onChange}
                        type="text"
                        name="resturant"
                        className="form-control"
                        minLength="6"
                        required
                    />
                </div>

                

                <div className="form-group">
                    <button className="btn btn-primary btn-success">
                        Signup
                    </button>
                </div>

            </form>

            </div>
        )
    }


}

AdminSignupForm.propTypes = {
    adminSignupRequest: PropTypes.func.isRequired
}

export default connect (null, {adminSignupRequest})(AdminSignupForm);

