import React, { Component } from 'react'

import LinksFooter from '../Components/Home/LinkFooter'
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the home component</h1>
        <a href="/test">Goto test</a><br/>
        <a href="/index2">Goto index2</a><br/> 
        <a href="/loading">Goto loading</a><br/>
        <LinksFooter/>
      </div>
    )
  }
}
