import React, { Component } from 'react'

import LinksFooter from '../Components/Home/LinkFooter'
export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  cookies = () => {
    console.log("this is cookies")
  }

  render() {
    return (
      <div>
        <h1>This is the home component</h1>
        <a link href="/test">Goto test</a><br/>
        <a link href="/index2">Goto index2</a><br/> 
        <a link href="/loading">Goto loading</a><br/>
        <a onClick={() => this.cookies()}>Cookies</a>
        <LinksFooter/>
      </div>
    )
  }
}
