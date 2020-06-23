import React, { useState, useEffect, Fragment } from 'react';

export default function Users (props) {
    // constructor() {
    //     super();

    //     this.state = {
    //         secondsVisible: 0
    //     }
    //     this.interval = null
    // }
    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         let {secondsVisible} = this.state;
    //         this.setState({
    //             secondsVisible: secondsVisible + 1
    //         })
    //     }, 1000);
    // }
    // componentWillUnmount() {
    //     clearInterval(this.interval)
    // }
    const { users } = props
    const [secondsVisible, setSecondsVisible] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsVisible(secondsVisible + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })
    return(
    <Fragment>
        <div>
            <p>Componente visível por {secondsVisible} segundos</p>
            <ul>{users.map((user, index) => {
                return (<li key={index}>{user.name.first} {user.name.last}</li>)
            })}</ul>
        </div>
    </Fragment>
    )
}
