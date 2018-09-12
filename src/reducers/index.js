import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import addMealReducer from './addMealReducer';
import updateMealReducer from './updateMealReducer';
import deleteMealReducer from './deleteMealReducer';
import addMenuReducer from './addMenuReducer';
import addOrderReducer from './addOrderReducer';
import adminloginReducer from './adminloginReducer';

const mainReducer = combineReducers({
    user: user_reducer,
    signupData: signUpReducer,
    authData: loginReducer,
    adminData: adminloginReducer,
    addmeal: addMealReducer,
    updatemeal: updateMealReducer,
    deletemeal: deleteMealReducer,
    addmenu: addMenuReducer,
    addorder: addOrderReducer,

});

export default mainReducer;
