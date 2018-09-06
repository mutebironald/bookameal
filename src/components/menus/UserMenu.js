import React, { Component } from 'react';

import axios from 'axios'

import { 
    Modal, ModalHeader, ModalBody,
    ModalFooter 
      } from 'reactstrap'

import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavLink,
       
        } from 'reactstrap';
        




import '../.././index.css';
import '../.././App.css';

import GetMenuPage from './GetMenuPage';

import CreateMenuPage from './CreateMenuPage'

import CreateOrder from '../orders/CreateOrder';

import GetOrderHistory from '../orders/GetOrderHistory';

import WeekDays from '../Weekdays'

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
            today: ''
            }
            this.toggle = this.toggle.bind(this)
            this.toggle1 = this.toggle1.bind(this)
            this.toggle2 = this.toggle2.bind(this)
        };


    getMenus = day => {
        axios.get(`api/v1/menu/caterer/${day}`)
        .then(response => { console.log("here -------- response", response.data.Menu);
         return response.data.Menu })
        .then(menu => {
            let meals = menu
            this.setState({ menu: meals, today: day.charAt(0).toUpperCase() + day.slice(1) });
        })
        .catch(error => console.log(error))    
    }


    getCurrentDay = () => {
        const numberDay = new Date().getDay();
        const days = [
          { key: 1, name: "Monday" },
          { key: 2, name: "Tuesday" },
          { key: 3, name: "Wednesday" },
          { key: 4, name: "Thursday" },
          { key: 5, name: "Friday" },
          { key: 6, name: "Saturday" },
          { key: 7, name: "Sunday" }
        ];
        const today = days.find(day => day.key === numberDay);
        return today.name;
      };

    getMenu = day =>{
        console.log("my state today", this.state)
        day = day.charAt(0).toUpperCase() + day.slice(1);
        const { menu } = this.state;
        this.setState({ currentDay:day , menu: [menu]});
    };

    componentDidMount(){
        
        const today = this.getCurrentDay();
        console.log("today h-----", today, typeof today, this.getMenus(today.toLowerCase()))
        this.getMenus(today.toLowerCase());
        this.setState({today});
        console.log(this.state, "componentWillMount")
    }

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
        console.log(id, "my id")
        this.setState({
            modal1: !this.state.modal1,
            id: id
        });
    }

    toggle2(){
        this.setState({
            modal2: !this.state.modal2
        });
    }

    resetOrder = () =>  this.setState({
        modal1: !this.state.modal1
    });

    resetOrder2 = () =>  this.setState({
        modal2: !this.state.modal2
    });


    returnMenu = () =>{
        const  menu = this.state;

        if(menu === undefined){
            console.log(menu.menu, "line 155")
            return (
                <div>
               <h2 class="text-white">No meals in menu</h2>
                </div>
            );
        }else {
            console.log(menu.menu, "-----------treasonous banana")
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

                <div>
                <div className="row">
                    <div className="col-md-2">
                    <div className="header text-center" style={{ margin: "20px"}}><strong><h3>Weekday</h3></strong></div>

                    <ul className="list-group">
                        <WeekDays getMenu={this.getMenus} />
                    </ul>
                    </div>
                    <div className="col-md-10">
                    <h4 className="header text-center">
                        {this.state.today}
                        's Menus
                    </h4>

                    <div className="col-md-20">
                <span className="btn btn-success btn-sm" onClick={() => this.toggle2()} style={{margin: "20px"}}>Order History</span>
              </div>

              <div style={{margin: "10px 10px 10px 10px"}} class="text-center">       

            {menu.menu.map(menu =>
            
                <div style={{ width: "32rem", height:"12rem", margin: "10px 10px 10px 10px"}} className="card mt-2 border-success text-center center">
                <div className="row text-bold " >
                
                <div className="col-md-9 meal-data text-center">
                    <strong>Caterer: </strong>{menu.caterer}
                </div>

                    <div className="col-md-3">
                        <span className="btn btn-success btn-sm" onClick={() => this.toggle1(menu.id)}>Order</span>
                    </div>

                    <div className="col-md-7 meal-data text-center">
                        <strong>Meal:</strong>{menu.meals.name}
                    </div>

                    <div className="col-md-7 meal-data text-center">
                        <strong>Price:</strong>{menu.meals.price}
                    </div>


                    <div className="col-md-7 meal-data text-center">
                        <strong>Day:</strong>{menu.meals.day}
                    </div>



                    
                    </div><br/><br/>
                        
                    </div>
                
                )}
        

            </div><br/><br/>

                    </div>
                    </div>
                </div>

            

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
                    {/* <button onClick={() => this.resetOrder2()} className="btn btn-primary">Close</button> */}
                </ModalFooter>
            </Modal>
 

            </div>


        );
            
        }
    }
    render() {
        return (
            // <div className="row">
            <div>
                {/* <div className="col-sm-2">{ }</div> */}
                
                <div >{this.returnMenu()}</div>
                
                
            </div>
        );
    }
}
export default UserMenu;
