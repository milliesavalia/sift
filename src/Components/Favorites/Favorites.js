import React, { Component } from 'react';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'semantic-ui-react'

class Favorites extends Component {
  render() {
    return (
      <div>
        <div>
        	<Sidebar/>
        </div>
      </div>
    )
  }
}
export default Favorites;