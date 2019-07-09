import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import CompanyPage from './Components/CompanyPage/CompanyPage';
import Analysis from './Components/Analysis/Analysis';
import DealNotes from './Components/DealNotes/DealNotes';
import DocPage from './Components/DocsPage/DocPage';
import Favorites from './Components/Favorites/Favorites';

class App extends Component {
  provider = null;
  state = { spacing: '16', app:{isOnboarded: false} };

  componentDidMount = () => {
    this.setState({
    })
  }


  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/companypage" component={CompanyPage} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/dealnotes" component={DealNotes} />
            <Route exact path="/docs" component={DocPage} />
            <Route exact path="/favorites" component={Favorites} />
          </div>
          {/* /.routes */}
        </div>
        {/* /.App */}
      </Router>
    );
  }
}


export default App;