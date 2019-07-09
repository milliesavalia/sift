import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'semantic-ui-react'

class CompanyPage extends Component {
  render() {
    return (
      <div>
        <div>
        	<Sidebar/>
        </div>

        <div class="row">
        	<div class="column">
            <img class="ui massive image" src={require('./company.png')} />
          </div>
        </div>
        <div class="row">
          <img class="ui huge image" src={require('./companydetails.png')} />
        </div>
      </div>
    )
  }
}
export default CompanyPage;