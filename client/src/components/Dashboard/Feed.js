import React from 'react'

import Searchbar from './Searchbar.js';

import '../../assets/css/Feed.css';

export default function Feed() {
  return (
    <div id="feedContainer">
      <Searchbar id="feedSearchbar"/>
      <h3>Feed</h3>
    </div>
  )
}
