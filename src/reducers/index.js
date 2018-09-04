import { combineReducers } from '../../../../Library/Caches/typescript/2.9/node_modules/redux';
import user_reducer from './user_reducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import rootReducer from './rootReducer';

import addMealReducer from './addMealReducer'
import updateMealReducer from './updateMealReducer'
import deleteMealReducer from './deleteMealReducer'
// import getMealReducer from './getMealReducer'

import addMenuReducer from './addMenuReducer'
// import getMenuReducer from './getMenuReducer'

import addOrderReducer from './addOrderReducer'
// import getOrderReducer from './getorderReducer'

import meals from './postReducer';
import adminloginReducer from './adminloginReducer';


const mainReducer = combineReducers({
    user: user_reducer,
    signupData: signUpReducer,
    authData: loginReducer,

    adminData: adminloginReducer,

    meals: meals,
    addmeal: addMealReducer,
    updatemeal: updateMealReducer,
    // getmeal: getMealRedeucer,
    deletemeal: deleteMealReducer,

    addmenu: addMenuReducer,
    // getmenu: getMenuReducer,

    addorder: addOrderReducer,
    // getorder: getOrderReducer,



});

export default mainReducer;
