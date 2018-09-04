import React from 'react';
import '../.././index.css';

import axios from 'axios'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class GetOrderHistory extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            order: []
        }
    }
    
    componentDidMount(){
        axios.get(`api/v1/orders/users/` + 4)
        .then(res => res)
        .then(resData => {
            let meals = resData
            this.setState({order: meals });
        })
    };

    componentWillMount(){
        console.log(this.state)
    }

    returnOrder = () => {
        const order = this.state.order;
        console.log("your decider",order)
        console.log("my state now over run", order)

        if(order.orderMeals === undefined){
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
                
                order.orderMeals.map((order) => (
                    <div>
                        <Card body outline color="sucess" style={{ width: "32rem", height:"9rem", margin: "10px"}} >
                            <CardTitle className="text-center">Order</CardTitle>
                            <CardText className="text-center"><strong>Id:</strong>{order.id}</CardText>
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
