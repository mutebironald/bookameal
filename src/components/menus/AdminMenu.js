import React, { Component } from 'react';

import axios from 'axios'

import { Badge, Button, Col,
    Modal, ModalHeader, ModalBody,
     ModalFooter , Form, FormGroup,
      Label, Input} from 'reactstrap'

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


import '../.././index.css';
import '../.././App.css';

import GetMenuPage from './GetMenuPage';

import CreateMenuPage from './CreateMenuPage'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
  }

class AdminMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            modal: false
            }
            this.toggle = this.toggle.bind(this)
        };

    componentDidMount(){
        axios.get('/api/v1/menu/caterer/2')
        .then(response => { console.log(response.data); return response.data })
        .then(resData => {

            let meals = resData
           this.setState({ menuMeals: meals });
           console.log("Menu-state",this.state)
           console.log("hshdgd---")
        })
    };

    

    toggle(){
        this.setState({
            modal: !this.state.modal,
        })
    }

    returnMenu = () =>{
        const  menu = this.state;

        if(menu.menuMeals === undefined){
            console.log(menu)
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
                    <NavLink href='/login' activeStyle={selectedStyle}>Logout</NavLink>
                    </Nav>      
                </Collapse>
                </Navbar>
                <button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem",  margin: "10px"}}>Add</button>
                
            {menu.menuMeals.Menu.map((menu) =>
                
                <div className="card mt-2" style={{ width: "32rem", height:"9rem", margin: "10px"}} class="card mt-2 border-success text-center center">
                <div className="row text-bold">
                
                <div className="col-md-5 meal-data text-center">
                    <strong>Meal:</strong>{menu.name}
                </div>

                <div className="col-md-4 meal-data text-center">
                    <strong>Price:</strong>{menu.price}
                </div>

                <div className="col-md-8 meal-data text-center">
                    <strong>Day:</strong>{menu.day}
                </div>
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
