import React, { Component } from 'react'

export default class DecrementButton extends Component {

    hadleButtonClick = () => {
        this.props.onDecrement('-')
    }
    render() {
        return (
                <button 
                className="waves-effect waves-light btn red darken-4"
                onClick={this.hadleButtonClick}>-</button>
        )
    }
}
