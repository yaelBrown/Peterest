import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the home component</h1>
        <a link href="/test">Goto test</a><br/>
        <a link href="/index2">Goto index2</a>
      </div>
    )
  }
}