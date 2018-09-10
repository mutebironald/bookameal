import React, { Component } from 'react';

import axios from 'axios'

import { Button, Col,
    Modal, ModalHeader, ModalBody,
    } from 'reactstrap'

import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavLink
        } from 'reactstrap';


import '../.././index.css';
import '../.././App.css';

import GetMenuPage from './GetMenuPage';

import CreateMenuPage from './CreateMenuPage'

import getCurrentDay from '../current'

import WeekDays from '../Weekdays'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
  }

const today = getCurrentDay();

class AdminMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menus: [],
            modal: false,
            // today: '',
            currentMenu: {
                day: "",
                meals: []
                
              }
            }
            this.toggle = this.toggle.bind(this)
            this.getMenus = this.getMenus.bind(this)
        };



    getMenus = () => {
        console.log("getMenus", axios.get(`api/v1/menu` , {headers:{"Authorization": localStorage.getItem('Authorization')}}))
        axios.get(`api/v1/menu`, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            console.log("this getMenus response",today, response.data.Menu,"hererea", response.data.Menu.find(
              menu => today === menu.day
            ))
            const today = getCurrentDay();
            console.log("magicmarie",response.data.Menu.day)
            const currentMenu = response.data.Menu.find(
             menu => today.toLowerCase() === menu.day
            );
            console.log("current menu" , currentMenu)
            this.setState({
              menus: response.data.Menu,
              currentMenu
            });
            console.log("this is your state",currentMenu)
          })
        }

    getMenu = day => {
        day = day.charAt(0).toUpperCase() + day.slice(1);
        const { menus } = this.state;
        const currentMenu = menus.find(menu => day.toLowerCase() === menu.day);
        console.log("At this point debugging kicks in", currentMenu)
        this.setState({ currentDay: day.toLowerCase(), currentMenu: currentMenu });
        console.log("howday this is our current day", day, "menu", this.state)
    };


    componentDidMount() {
        this.getMenus();
      }

    

    toggle(){
        this.setState({
            modal: !this.state.modal,
        })
    }

    returnMenu = () =>{
        const  currentMenu = this.state.currentMenu;

        if(currentMenu.meals.length === undefined){
            console.log("we are here",currentMenu.meals)
            return (
                <div>
               <h2 class="text-white">No meals in menu</h2>
                <Button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem"}}>Add</Button>
                <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
                toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                    <ModalBody>
                        <CreateMenuPage/>      
                    </ModalBody>
                </Modal>
                </div>
            );
        }else {
           return (
               <Col>
               <div>

                <Navbar color="success" light expand="md">
                <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink>
                    <NavLink href='/adminMenu' activeStyle={selectedStyle}>Menu</NavLink>           
                    <NavLink href='/adminOrders' activeStyle={selectedStyle}>Orders</NavLink>
                    <NavLink href='/adminlogin' activeStyle={selectedStyle}>Logout</NavLink>
                    </Nav>      
                </Collapse>
                </Navbar>
                
                <button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem",  margin: "10px"}}>Add</button>

                <div className="row">
                <div className="col-md-2">
                <div className="header text-center" style={{ margin: "5px"}}><strong><h3>Weekday</h3></strong></div>
                <ul className="list-group">
                    <WeekDays getMenu={this.getMenu} />
                </ul>
                </div>
                {/* </div> */}
                
            {currentMenu.meals.map((menu) =>
                
                <div className="card mt-2" style={{ width: "25rem", height:"5rem", margin: "10px"}} class="card mt-2 border-success text-center center">
                <div className="row text-bold">
                
                <div className="col-md-5 meal-data text-center">
                    <strong>Meal:</strong>{menu.name}
                </div>

                <div className="col-md-4 meal-data text-center">
                    <strong>Price:</strong>{menu.price}
                </div>

                {/* <div className="col-md-8 meal-data text-center">
                    <strong>Day:</strong>{menu.day}
                </div> */}
                </div>
                                   
                </div>
                
               
            )}
            <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                <ModalBody>
                    <CreateMenuPage/>  
                </ModalBody>
            </Modal>

            </div>
            </div>
        
            </Col>

        );
            
        }
    }
    render() {
        return (
            <div>
                {this.returnMenu()}
                
            </div>
        );
    }
}
export default AdminMenu;
