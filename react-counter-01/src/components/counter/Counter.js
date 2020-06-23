import React, {useState} from 'react'
import css from './counter.module.css'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import Value from './Value'

// functional component with hooks
export default function Counter(props) {
    // constructor(){
    //     super();

    //     this.state = {
    //         currentCounter: 0,
    //         steps: 0
    //     }
    // }
    const [currentCounter, setCurrentCounter] = useState(0)
    const [steps, setSteps] = useState(0)
    const handleClickButton = (clickType) => {
        // this.setState({
        //     currentCounter: (clickType === '+') ? currentCounter + 1 : currentCounter - 1,
        //     steps: steps + 1
        // })
        setCurrentCounter((clickType === '+') ? currentCounter + 1 : currentCounter - 1)
        setSteps(steps + 1)
    }
    
    return (
        <div className={css.counterContainer}>
                <DecrementButton onDecrement={handleClickButton}/>
                    <Value value={currentCounter} />
                <IncrementButton onIncrement={handleClickButton}/>
            <span className={css.counterValue}>({steps})</span>
        </div>
    )
}
