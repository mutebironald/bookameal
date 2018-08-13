import React from 'react';
// import history from './history.js';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLoginRequest } from './actions/userLoginRequest'

class LoginForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        console.log(this.props)
    }

    componentWillReceiveProps(loginDatas) {
        // console.log("gete")
        // console.log(loginData["message"])
        // console.log(this.props.loginData.message)
        console.log(loginDatas.loginData.access_token)
        localStorage.setItem('access_token', loginDatas.loginData.access_token)
        console.log(localStorage.getItem('access_token'))
        // console.log("gete")
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.name)
        console.log(e.target.value)
    }

    onSubmit(e){
        e.preventDefault();
        console.log("hello from login")
        console.log(JSON.stringify(this.state));


        this.props.userLoginRequest(JSON.stringify(this.state));
        console.log("HEHEHEH")
        // history.push('/login');
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
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
                        Login
                    </button>
                </div>

            </form>
        );
    }
}
LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loginData: state.authData.message
})

export default connect (mapStateToProps, {userLoginRequest})(LoginForm);

// export default connect (null, {userSignupRequest})(SignupForm);
