import React, { Coponent  } from "../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import LoginForm from "./LoginForm";

class LoginPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">

                <LoginForm/>

                </div>
            </div>
        );
    }
}

export default LoginPage;
