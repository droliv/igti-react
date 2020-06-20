import React, { Component, Fragment } from 'react';

export default class Users extends Component {
    constructor() {
        super();

        this.state = {
            secondsVisible: 0
        }
        this.interval = null
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            let {secondsVisible} = this.state;
            this.setState({
                secondsVisible: secondsVisible + 1
            })
        }, 1000);
    }
    componentDidUpdate() {
    console.log('component did update');
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        let {users} = this.props;
        let {secondsVisible} = this.state;
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
}
