import React, { Component, Fragment } from 'react';
import Users from './components/users/Users'

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      users: [],
      showUsers: false
    }
  }
  async componentDidMount() {
    const result = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
    const json = await result.json();
    this.setState({ 
      users: json.results
    })
  }
  handleShowUsers = (event) => {
    this.setState({
      showUsers: event.target.checked
    })
  }
  render() {
    const {showUsers, users} = this.state;
    return (<Fragment>
      <div className="switch">
        <label>Mostrar Usuários:
          <input type="checkbox" onChange={this.handleShowUsers} />
          <span className="lever"></span>
        </label>
      </div>
      <hr />
      {showUsers && <Users users={users} />}
    </Fragment>)
  }
}
