import React, { Component } from 'react'

import LinksFooter from '../Components/Home/LinkFooter'
import RegisterService from '../Services/RegisterService.js'

export default class Home extends Component {
  
  handleSubmit() {
    alert("handle submit was ran")
    // let n = "test"
    // let p = "test"
    // let e = "test"
    // let l = "test"
    // if (n === "" || 
    //   p === "" || 
    //   e === "" || 
    //   l === "") {
    //     return
    //   } else {
    //     let newAcct = RegisterService.registerAccount(n,p,e,l)
    //     if (newAcct) {
    //       // Push jwt to local storage
    //       window.location.href("/dashboard")
    //     } else {
    //       // Display error
    //       console.error("Error trying to register account")
    //       this.setState({
    //         name: "",
    //         password: "",
    //         email: "",
    //         location: "",
    //       })     
    //     }
    //   }
  }
  
  render() {
    return (
      <div>
        <h1>This is the home component</h1>
        <a href="/test">Goto test</a><br/>
        <a href="/index2">Goto index2</a><br/> 
        <a href="/loading">Goto loading</a><br/>
        <div onPress={() => this.handleSubmit()} style={{cursor: "pointer"}}>test button</div>
        <LinksFooter/>
      </div>
    )
  }
}
