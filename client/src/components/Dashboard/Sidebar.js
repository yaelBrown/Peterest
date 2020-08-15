import React from 'react';

import '../../assets/css/Sidebar.css';
import EditIcon from '@material-ui/icons/Edit';
import PetsIcon from '@material-ui/icons/Pets';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div>
        <div id="sidebarContainer">
          <table id="sidebarTable">
            <tr>
              <td><img id="sidebarPic" className="sidebarTableIcons" src={this.props.profilePic} alt=""/></td>
              <td><p id="sidebarTableUsername" className="sidebarTableLabels sbTL">{this.props.name}</p></td>
            </tr>
            <tr>
              <td><EditIcon className="sidebarTableIcons"/></td>
              <td><p className="sidebarTableLabels sbTL">Edit Profile</p></td>
            </tr>
            <tr>
              <td><PetsIcon className="sidebarTableIcons"/></td>
              <td><p className="sidebarTableLabels sbTL">Edit Pets</p></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}