import React from 'react';
import '../.././index.css';
import { Card, CardTitle, CardText } from 'reactstrap';

class GetOrderHistory extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            order: []
        }
    }
    returnOrder = () => {
        const order = this.state.order;
        if(order.data === undefined){
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
