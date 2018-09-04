import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { adminLoginRequest } from '../../actions/adminLoginRequest';
import '../.././App.css'
import '../.././index.css'

import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';

class AdminLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            resturant: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
        let green = { background: 'green', text: "white" };
        notify.show("login", "custom", 3000, green)
    }

    componentWillMount(){
        console.log("the props are here---------------",this.props)
    }

    onChange(event){
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({[name]: value}
    )}

    onSubmit(event){
        event.preventDefault();
        this.props.adminLoginRequest(this.state)
        .then(response => {
            if(response.loggedIn){
                if(response.admin === true){
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
    }

    render(){
        return(
            <div>
                <div class="wrapper">


                    <form onSubmit={this.onSubmit} class="form-signin">
                    <Notifications/>
                        <h6 class="text-center"><strong>Login</strong></h6>
                        <div className="panel panel-default">
                        </div>


                        <div>
                            <label className="control-label"><strong>Resturant</strong></label>
                            <input
                                value={this.state.resturant}
                                onChange={this.onChange}
                                type="text"
                                name="resturant"
                                className="form-control"
                                placeholder="Resturant Name"
                            />

                        </div>

                        <div>
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
                            <button className="btn btn-primary btn-success">
                                Login
                            </button>
                        </div>

                    </form>
                    </div>

                    </div>

        )
    }
}

AdminLoginForm.contextTypes = {
    router: PropTypes.object
}
AdminLoginForm.propTypes = {
    adminLoginRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loginData: state.adminData.message
})


export default connect (mapStateToProps, {adminLoginRequest})(AdminLoginForm);
