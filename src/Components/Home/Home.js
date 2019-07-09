import React, { Component } from 'react';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import CompanyPage from '../CompanyPage/CompanyPage';
import Analysis from '../Analysis/Analysis';
import DealNotes from '../DealNotes/DealNotes';
import DocPage from '../DocsPage/DocPage';
import Favorites from '../Favorites/Favorites';
import { Button } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
        	<Sidebar/>
        </div>
        <div>
        	<Search textChange={this.handleSearchChange} /><Button href="/companypage">Search</Button>
        </div>
      </div>
    )
  }
}
export default HomePage;