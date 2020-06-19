import React, { Component } from 'react'

export default class IncrementButton extends Component {

    hadleButtonClick = () => {
        this.props.onIncrement('+')
    }
    render() {
        return (

                <button 
                className="waves-effect waves-light btn green darken-4"
                onClick={this.hadleButtonClick}>+</button>
        )
    }
}
