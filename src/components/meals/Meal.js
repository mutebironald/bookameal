import React, { Component } from 'react';

export default class Meal extends Component {
    render() {
        return (
            <li>
                { this.props.text }
            </li>
        )
    }
}
