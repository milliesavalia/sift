import React, { Component } from 'react';
import Search from '../Search/Search';
import CompanyPage from '../CompanyPage/CompanyPage';
import Analysis from '../Analysis/Analysis';
import DealNotes from '../DealNotes/DealNotes';
import DocPage from '../DocsPage/DocPage';
import Favorites from '../Favorites/Favorites';
import { Button, Icon, Menu, Segment } from 'semantic-ui-react'

import "./Sidebar.css";

class Sidebar extends Component {
   render() {
        return (
            <div>
              <ul id="nav">
                <li><Button href="/">Home <Icon name='home'/></Button></li>
                <li><Button href="/analysis">Analysis</Button></li>
                <li><Button href="/favorites">Favorites</Button></li>
                <li><Button href="/dealnotes">Deal Notes</Button></li>
                <li><Button href="/docs">Documents</Button></li>
              </ul>
            </div>
        );
    }
}
export default Sidebar;