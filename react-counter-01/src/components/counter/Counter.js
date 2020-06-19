import React, { Component } from 'react'
import css from './counter.module.css'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import Value from './Value'

export default class Counter extends Component {
    constructor(){
        super();

        this.state = {
            currentCounter: 0,
            steps: 0
        }
    }
    handleClickButton = (clickType) => {
        const {currentCounter, steps} = this.state;
        this.setState({
            currentCounter: (clickType === '+') ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1
        })
    }
    
    render() {
        let {currentCounter, steps} = this.state;
        return (
            <div className={css.counterContainer}>
                    <DecrementButton onDecrement={this.handleClickButton}/>
                        <Value value={currentCounter} />
                    <IncrementButton onIncrement={this.handleClickButton}/>
                <span className={css.counterValue}>({steps})</span>
            </div>
        )
    }
}
