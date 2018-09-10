import React from 'react';
import '../.././index.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import CreateOrder from './CreateOrder';

import { Modal, ModalHeader, ModalBody} from 'reactstrap'

import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavLink,
        } from 'reactstrap';


const selectedStyle = {
        backgroundColor: "white",
        color: "slategasy"
      }

class GetOrders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            order: [],
            modal: false
            }
            this.toggle = this.toggle.bind(this)
        };

    componentDidMount(){
        fetch('/api/v1/orders')
        .then(response => response.json())
        .then(resData => {

            let meals = resData
           this.setState({ orderMeals: meals });
           console.log("hammingly wathonic",this.state)
        })
    };

    componentWillMount(){
        // console.log("gvduidwfghjf")
        console.log(this.state)
    }

    toggle(){
        this.setState({
            modal: !this.state
        })
    }

    returnOrder = () =>{
        const  order = this.state;

        if(order.orderMeals === undefined){
            console.log(order)
            return (
                <div>
               <h2 class="text-white">No orders yet</h2>
                </div>
            );
        }else {
           return (
           
           order.orderMeals.orders.map((order) =>(
                
                <div>

                <div>
                </div>

        <div>
        <Card body outline color="sucess" style={{ width: "32rem", height:"12rem", margin: "10px"}} >
            <CardTitle className="text-center">Order</CardTitle>
            <CardText className="text-center"><strong>Id:</strong>{order.id}</CardText>
            <CardText className="text-center"><strong>Time:</strong>{order.order_time}</CardText>
        </Card>
        
        </div>

            <Button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem"}}>Add</Button>
            <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                <ModalBody>
                    <CreateOrder/>      
                </ModalBody>
            </Modal>



        </div>
            )));
            
        }
    }
    render() {
        return (
            <div>
                <Navbar color="success" light expand="md">
                    <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink>
                        <NavLink href='/getMenu' activeStyle={selectedStyle}>Menu</NavLink>           
                        <NavLink href='/getOrder' activeStyle={selectedStyle}>Orders</NavLink>
                        </Nav>      
                    </Collapse>
                </Navbar>
                {this.returnOrder()}

                

                    {/* <Button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem"}}>Add</Button>
                    <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                        <ModalBody>
                            <CreateOrder/>      
                        </ModalBody>
                    </Modal> */}



                

            </div>
        );
    }
}
export default GetOrders;
