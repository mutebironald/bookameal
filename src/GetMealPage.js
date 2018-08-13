// import React from './react';
// // import { ReactRouter} from 'react';
// // import { Router } from 'react-router';
// // import history from './history'
// // import { Provider } from 'react-redux';
// // import thunk from 'redux-thunk'


// var { Router, Route, browserHistory } = ReactRouter
// class First extends React.Component{
//   constructor(props){
//     super(props);
//     this.sendValue = this.sendValue.bind(this);    
//     this.setValue = this.setValue.bind(this);
//     this.state = {
//       userID: "@nageshwar_uidev"
//     };
//   }
//   setValue(e){
//     this.setState({
//       userID: e.target.value
//     });
//   }
//   sendValue(){
//     //console.log(this.state.userID);
//     browserHistory.push('/second/'+this.state.userID); 
//   }
//   render(){
//     return (
//       <div>
//         <input type='text' value={this.state.userID} onChange={this.setValue} />
//         <button onClick={this.sendValue}>send</button>
//       </div>
//     )
//   }
// }

// class Second extends React.Component{
//   render(){
//     let { userID } = this.props.params;
//     return <div>The userID from first component is {userID} <a href="#" onClick={()=>browserHistory.push('/')}>back</a></div>
//   }
// }
// class Main extends React.Component{

//   render(){
//     return (
//      <Router history={browserHistory}>
//           <Route path='/' component={First}></Route>
//           <Route path='/second/:userID' component={Second}></Route>
//     </Router>)
//    }
// }
// React.render( <Main />,document.getElementById('app'));
// browserHistory.push('/')

