import React, { Component } from 'react'

import { testApi } from '../Services/HomeService';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "no connection to db attempted"
    }
  }

  connTestHandler() {
    testApi().then((res) => this.setState({data: res.data}))
  }
  
  render() {
    return (
      <div>
        <h1>Peterest Home</h1>
        <p>Test connection to API</p>
        <button onClick={() => this.connTestHandler()}>Test</button>
        <h3>{this.state.data}</h3>
      </div>
    )
  }
}
