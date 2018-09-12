import React from 'react';
import '../.././index.css';

import axios from 'axios'
import instance from '../../actions/instance';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import getOrderHistoryRequest from '../../actions/getOrderHistoryRequest';

class GetOrderHistory extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            order: []
        }
    }

    componentWillMount(){
        console.log(this.state)
    }

    returnOrder = () => {
        const order = this.state.order;
        console.log("your decider",order)
        console.log("my state now over run", order)

        if(order.data === undefined){
            console.log(this.state)
            console.log("boolean",typeof order.orderMeals === undefined)
            return (
                <div>
                    <h2 class="text-white">No orders yet</h2>
                </div>
            );
        }
        else {
            return (
                
                order.data.Orders.map((order) => (
                    <div>
                        <Card body outline color="sucess" style={{ width: "28rem", height:"9rem", margin: "10px"}} >
                            <CardTitle className="text-center">Order</CardTitle>
                            <CardText className="text-center"><strong>Meal:</strong>{order.meal}</CardText>
                            <CardText className="text-center"><strong>Time:</strong>{order.order_time}</CardText>
                        </Card>

                    </div>
                    
                ))
            )
        }
    }

    render(){
        return(
            <div>
                {this.returnOrder()}
            </div>
        )
    }



}

export default GetOrderHistory;