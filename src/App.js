import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/users/SignupForm';
import LoginForm from './LoginForm';
import AddMealForm from './AddMealForm';
import UpdateMealForm from './components/meals/UpdateMealForm';
import GetMeals from './GetMeals';
import GetMealPage from './GetMealPage';



import {Switch, Router, Route, Link} from 'react-router-dom';
// import { Router } from 'react-router';
import history from './history'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers';

import { getAllMeals } from './actions/index';




const store = createStore(
  mainReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.dispatch(getAllMeals());

class App extends Component {
  render() {
    const { dispatch, visibleMeals } = this.props


    return (
      <Provider store={store}>
      <Router history={history}>
      <nav className="navbar navbar-expand-lg navbar-inverse bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to={'/'}>Home</Link>
        </li>
      <li className="nav-item">
        <Link to={'/signup'}>Signup</Link>
      </li>
      <li className="nav-item">
        <Link to={'/Login'}>Login</Link>
      </li>
      <li className="nav-item">
        <Link to={'/addMeal'}>AddMeal</Link>
      </li>
      <li className="nav-item">
        <Link to={'/get'}>getter</Link>
      </li>
      <li className="nav-item">
        <Link to={'/updateMeal'}>UpdateMeal</Link>
      </li>
      <li className="nav-item">
        <Link to={'/getMeals'}>GetMeals</Link>
      </li>
    </ul>
    <hr/>
    <Switch>
          <Route exact path="/signup" component={SignupForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/addMeal" component={AddMealForm}/>
          <Route path="/updateMeal" component={UpdateMealForm}/>
          <Route path="/getMeals" component={GetMeals}/>
          <Route path="/get" component={GetMealPage}/>
    </Switch>
  </div>
</nav>
</ Router>
</ Provider>

    // <Provider store={store}>
    //   <Router history={history}>
    //     <div>
    //       <h2> Welcome to Book-A-Meal</h2>
    //       <ul>
    //         <li><Link to={'/'}>Home</Link></li>
    //         <li><Link to={'/signup'}>Signup</Link></li>
    //         <li><Link to={'/Login'}>Login</Link></li>
    //         <li><Link to={'/addMeal'}>AddMeal</Link></li>
    //         <li><Link to={'/updateMeal'}>UpdateMeal</Link></li>
    //         <li><Link to={'/getMeals'}>GetMeals</Link></li>
    //       </ul>
    //       <hr/>
    //     <Switch>
    //       <Route exact path="/signup" component={SignupForm}/>
    //       <Route path="/login" component={LoginForm}/>
    //       <Route path="/addMeal" component={AddMealForm}/>
    //       <Route path="/updateMeal" component={UpdateMealForm}/>
    //       <Route path="/getMeals" component={GetMeals}/>
    //     </Switch>
    //     </div>
    //   </Router>

    // </Provider>
    );
  }
}


export default App;
