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

import CreateOrder from '../orders/CreateOrder';

import GetOrderHistory from '../orders/GetOrderHistory';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
}

class UserMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            modal: false,
            modal1: false,
            modal2: false,
            }
            this.toggle = this.toggle.bind(this)
            this.toggle1 = this.toggle1.bind(this)
            this.toggle2 = this.toggle2.bind(this)
        };

    componentDidMount(){
        axios.get('/api/v1/menu')
        .then(response => { console.log(response.data); return response.data })
        .then(resData => {
            let meals = resData
           this.setState({ menuMeals: meals });
        })
    };

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    resetOrder = () => this.setState({
        modal1: !this.state.modal1,
        id: null
    })



    makeOrder = () => {
        const id  = this.state.id;

        axios.post(`/api/v1/orders`, id)
        .then(response => {
            console.log("response", response.data)
            dispatchEvent({ type: "ADD_ORDER", payload: id});
        })
        .catch(error => {
            console.log("errors", error);
        })

        this.resetOrder();

        

    }

    toggle1(id){
        this.setState({
            modal1: false,
            id: id
        });
    }

    toggle2(){
        this.setState({
            modal2: !this.state.modal2
        });
    }

    resetOrder = () =>  this.setState({
        modal2: !this.state.modal2
    });


    returnMenu = () =>{
        const  menu = this.state;

        if(menu.menuMeals === undefined){
            console.log(menu)
            return (
                <div>
               <h2 class="text-white">No meals in menu</h2>
                </div>
            );
        }else {
           return (

            <div class="text-center" >

            <Navbar color="success" light expand="md">
                <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavLink href='/userMenu' activeStyle={selectedStyle}>Menu</NavLink>

                        <NavLink href="/login" activeStyle={selectedStyle}>Logout</NavLink>

        
                    </Nav>
                    
                </Collapse>
              </Navbar>
              <div className="col-md-20">
                <span className="btn btn-success btn-sm" onClick={() => this.toggle2()} style={{margin: "20px"}}>Order History</span>
              </div>

              <div style={{margin: "10px 10px 10px 10px"}} class="text-center">

              

            {menu.menuMeals.Menu.map((menu) =>
                
                <div style={{ width: "32rem", height:"10rem", margin: "10px 10px 10px 10px"}} className="card mt-2 border-success text-center center">
                <div className="row text-bold " >
                
                <div className="col-md-9 meal-data text-center">
                    <strong>Meal:</strong>{menu.name}
                </div>


                <div className="col-md-3">
                    <span className="btn btn-success btn-sm" onClick={() => this.toggle1(menu.id)}>Order</span>
                </div>

                <div className="col-md-7 meal-data text-center">
                    <strong>Price:</strong>{menu.price}
                </div>



                <div className="col-md-3 meal-data text-center">
                    <strong>Day:</strong>{menu.day}
                </div>
                </div><br/><br/>
                    
                </div>
               
            )}

            </div><br/><br/>
            

            <Modal isOpen={this.state.modal1} backdropTransition={{ timeout: 1300}}
                toggle={this.toggle1} className={this.props.className}>
                <ModalHeader toggle={this.toggle1} class="modal">Make Order</ModalHeader>
                <ModalBody class="modal-main">
                    <CreateOrder id={this.state.id} toggle={this.toggle1.bind(this)}/>
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => this.resetOrder()} className="btn btn-primary">Close</button>
                </ModalFooter>
                </Modal>


            <Modal isOpen={this.state.modal2} backdropTransition={{ timeout: 1300}}
                toggle={this.toggle2} className={this.props.className}>
                <ModalHeader toggle={this.toggle2} class="modal" >My Order History</ModalHeader>
                <ModalBody class="modal-main">
                    <GetOrderHistory/>
                    {/* <CreateOrder id={this.state.id} toggle={this.toggle2.bind(this)}/> */}
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => this.resetOrder()} className="btn btn-primary">Close</button>
                </ModalFooter>
            </Modal>
 

            </div>


        );
            
        }
    }
    render() {
        return (
            <div >
                
                {this.returnMenu()}
                
                
            </div>
        );
    }
}
export default UserMenu;
