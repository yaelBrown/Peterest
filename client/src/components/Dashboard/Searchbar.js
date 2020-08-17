import React, { Component } from 'react'

import '../../assets/css/Searchbar.css';

export default class Searchbar extends Component {
  render() {
    return (
      <div id="sbContainer">
        <form>
          <input type="text" id="sb" placeholder="Search Peterest"/>
        </form>
      </div>
    )
  }
}
