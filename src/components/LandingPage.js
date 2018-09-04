import React from 'react';
import DayPicker from 'react-day-picker';

import '.././App.css'

// import 'react-day-picker/lib/style.css';

import {Tab, Row, Col, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

class LandingPage extends React.Component {

    constructor(props){
        super(props)
    }


    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }





  render() {
    return (
      <div>
      
        <div class="tab text-success ">

        {/* <button class="tablinks" onclick="openCity(event, 'Monday')" class="text-success bg-light">Monday</button>
        <button class="tablinks" onclick="openCity(event, 'Tuesday')" class="text-primary bg-dark">Tuesday</button>
        <button class="tablinks" onclick="openCity(event, 'Wednesday')" class="text-secondary bg-success">Wednesday</button>
        <button class="tablinks" onclick="openCity(event, 'Thursday')" class="text-warning ">Thursday</button>
        <button class="tablinks" onclick="openCity(event, 'Friday')" class="text-danger bg-dark">Friday</button>
        <button class="tablinks" onclick="openCity(event, 'Saturday')" class="text-info bg-light">Saturday</button>
        <button class="tablinks" onclick="openCity(event, 'Sunday')" class="text-light bg-danger">Sunday</button> */}
        <div class="col-xs-9">
        <div class="tab-content">
            <div class="tab-pane active" id="home-r">Home Tab.</div>
            <div class="tab-pane" id="profile-r">Profile Tab.</div>
            <div class="tab-pane" id="messages-r">Messages Tab.</div>
            <div class="tab-pane" id="settings-r">Settings Tab.</div>
        </div>
        </div>
 
        <div class="col-xs-3"> 
        <ul class="nav nav-tabs tabs-right">
            <li class="active"><a href="#home-r" data-toggle="tab">Home</a></li>
            <li><a href="#profile-r" data-toggle="tab">Profile</a></li>
            <li><a href="#messages-r" data-toggle="tab">Messages</a></li>
            <li><a href="#settings-r" data-toggle="tab">Settings</a></li>
        </ul>
        </div>




        </div>

        <div id="Monday" class="tabcontent">
        <h6>London</h6>
        <p>London is the capital city of England.</p>
        </div>

        {/* <div id="Tuesday" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p> 
        </div> */}

        {/* <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
        </div> */}

        {/* Dropdown*/}
        {/* <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        </div> */}

    </div>
        
    



        
      
    );
  }
}

export default LandingPage;
