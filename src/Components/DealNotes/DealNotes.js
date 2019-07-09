import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'semantic-ui-react'

class DealNotes extends Component {
  render() {
    return (
      <div>
        <div>
          <Sidebar/>
        </div>

        <div class="img">
          <img class="ui massive image" src={require('./dealnotes.png')} />
        </div>
      </div>
    )
  }
}
export default DealNotes;