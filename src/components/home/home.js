import React from 'react';
import vegmeals from '../../images/vegmeals.jpg';

class home extends React.Component{

    render(){
        return (
            <div>
                <img src={vegmeals} alt="meals"/>
            </div>
        );
    }
}

export default home;



