import React, {Component} from 'react'

import '../App.css'

// import logo from './logo.svg';
// import './App.css';
// import SignupForm from './components/users/SignupForm';
// import LoginForm from './components/users/LoginForm';
// import AddMealForm from './components/meals/AddMealForm';
// import UpdateMealForm from './components/meals/UpdateMealForm';
// import GetMeals from './components/meals/GetMeals';
// import GetMealPage from './components/meals/GetMealPage';
// import DeleteMeal from './components/meals/DeleteMeal';
// import GetMenu from './components/menus/GetMenu';

// import CreateMenuPage from './components/menus/CreateMenuPage';
// import CreateOrder from './components/orders/CreateOrder';
// import GetOrders from './components/orders/GetOrders'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import NavBar from './components/./NavBar';

// import './components/Dashboard';
// import trial from './components/trial';
// import Meal from './components/meals/Meal';
// import home from './components/home/home'
// import Search from './components/Search';
import LandingPage from './LandingPage';

import Whoops404 from './Whoops404';

import AddMealModal from './meals/AddMealModal';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  } from 'reactstrap';


import {Switch, Router, Route, Link} from 'react-router-dom';
// import history from './history'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from '../reducers';

import { getAllMeals } from '.././actions';



const store = createStore(
  mainReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.dispatch(getAllMeals());







// import AddMealModal from './meals/AddMealModal';



  const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
  }

class NavBars extends React.Component{
  constructor(props){
    super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };

  }
  

  toggle() {
    <AddMealModal/>
    this.setState({

      isOpen: !this.state.isOpen
    });

  }



    render(){
      const { dispatch, visibleMeals } = this.props
        return(

            <div>
            <Navbar color="success" light expand="md">
              <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    {/* <NavItem>
                      <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink>
                    </NavItem> */}

                    <NavLink href='signup' activeStyle={selectedStyle}>Signup</NavLink>

                    <NavLink href='/login' activeStyle={selectedStyle}>login</NavLink>

                    <NavLink href='/land' activeStyle={selectedStyle}>land</NavLink>

                    {/* <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink> */}

                    <UncontrolledDropdown>
                      <DropdownToggle nav caret>
                        Meals
                      </DropdownToggle>

                      <DropdownMenu right>
                        <DropdownItem>
                          {/* <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink> */}
                        </DropdownItem>

                        {/* <DropdownItem>
                          <button className=" btn btn-success btn-sm" onClick={() => this.toggle()} >Add Meal</button>

                        </DropdownItem>

                        <DropdownItem>
                          <NavLink href='/updateMeal' activeStyle={selectedStyle}>Update Meal</NavLink>
                        </DropdownItem> */}

                      </DropdownMenu>
                    </UncontrolledDropdown>






                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Menu
                      </DropdownToggle>

                      <DropdownMenu right>
                        <DropdownItem>
                          {/* <NavLink href='/getMenu' activeStyle={selectedStyle}>GetMenu</NavLink> */}
                        </DropdownItem>
                        <DropdownItem>
                          {/* <NavLink href='/createMenu' activeStyle={selectedStyle}>CreateMenuPage</NavLink> */}
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                      
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle nav caret>
                        Orders
                      </DropdownToggle>

                      <DropdownMenu right>
                        <DropdownItem>
                          {/* <NavLink href='/createOrder' activeStyle={selectedStyle}>CreateOrder</NavLink> */}
                        </DropdownItem>

                        <DropdownItem>
                          {/* <NavLink href='/getOrder' activeStyle={selectedStyle}>GetOrdersPage</NavLink> */}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </Nav>
                  
              </Collapse>
            </Navbar>
            </div>
   

        );
    }
}

export default NavBars;
