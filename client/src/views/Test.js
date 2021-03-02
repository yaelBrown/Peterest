import React, { Component } from 'react'

import { testApi, testDB } from '../Services/TestService';

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResp: "no connection to api attempted",
      dbResp: "no connection to db attempted"
    }
  }

  connTestHandler() {
    testApi().then((res) => this.setState({apiResp: res.data}))
  }

  dbTestHandler() {
    testDB().then((res) => this.setState({dbResp: res.data}))
  }
  
  render() {
    return (
      <div>
        <h1>Peterest Home</h1>
        <p>Test connection to API</p>
        <button onClick={() => this.connTestHandler()}>Test API</button>
        <button onClick={() => this.dbTestHandler()}>Test DB</button>
        <h3>{this.state.apiResp}</h3>
        <h3>{this.state.dbResp}</h3>
      </div>
    )
  }
}
