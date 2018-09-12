import React from 'react';
import { Card, CardText } from 'reactstrap';
import '../.././index.css';
import instance from '../../actions/instance';

export class GetOrderHistory extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            order: []
        }
    }
    
    componentDidMount(){
        instance.get(`api/v1/orders/users`, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(res => res)
        .then(resData => {
            let meals = resData
            this.setState({order: meals });
        })
    };


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
                        <Card body outline color="sucess" style={{ width: "28rem", height:"10rem", margin: "10px"}} >
                            <CardText className="text-center"><strong>Meal:</strong>{order.meal}</CardText>
                            <CardText className="text-center"><strong>Price:</strong>{order.price}</CardText>
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
