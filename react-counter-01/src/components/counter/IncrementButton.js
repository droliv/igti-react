import React from 'react'

// functional component
export default function IncrementButton(props) {
    const { onIncrement } = props
    const hadleButtonClick = () => {
        onIncrement('+')
    }
        return (

                <button 
                className="waves-effect waves-light btn green darken-4"
                onClick={hadleButtonClick}>+</button>
        )
}
