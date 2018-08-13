import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import rootReducer from './rootReducer';

import meals from './postReducer';


const mainReducer = combineReducers({
    user: user_reducer,
    signupData: signUpReducer,
    authData: loginReducer,
    meals: meals
});

export default mainReducer;
