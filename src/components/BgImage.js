import vegmeals from '../images/vegmeals.jpg';
import { Component } from 'react'

var style ={
    width: "100%",
    height: "400px",
    backgroundImage: `url(${vegmeals})`
};

class BgImage extends Component {
    render(){
        return(
            <section style={ style }>
            </section>
        );
    }
}

export default BgImage;
