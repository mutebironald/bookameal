// import React, { Component  } from "react";
// import GetMeals from "./GetMeals";


// import {
//     Container, Col, Form,
//     FormGroup, Label, Input,
//     Button, FormText, Card, CardTitle, CardText 
//   } from 'reactstrap';


// class GetMealPage extends Component{

//     componentWillMount(){
//         console.log(this.props)
//     }
//     render(){
//         return(
//             <Container>
//             <div className="card mt-2">
//                 <div className="row text-muted">
//                     <div className="col-md-5 meal-data">
//                     <strong>Meal:</strong>
//                     {this.props.item.name}
//                     </div>
//                     <div className="col-md-4 meal-data">
//                     <strong>Price:</strong>{this.props.item.price}
//                     </div>
//                     <div className="col-md-3 p-2">
//                     <a href="/updateMeal" id = {this.props.item.id} className="btn btn-info btn-sm" role="button" aria-pressed="true">Edit meal</a>
//                     <br/><br/>
//                     <Button
//                         className="btn btn-danger">
//                         delete
//                     </Button>
//                     </div>
//                 </div>
//         <div>
//             <Card body outline color="sucess" style={{ width: "15rem", height:"10rem"}}>
//                 <CardTitle>Order</CardTitle>
//                 <CardText><strong>Meal:</strong>
//                     {this.props.item.name}</CardText>
//                 <CardText><strong>Price:</strong>{this.props.item.price}</CardText>
//             </Card>
        
//         </div>

//             </div>
//             </Container>
            

//         )
//     }
// }

// export default GetMealPage;
