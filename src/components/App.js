import React, { Component } from 'react';
import SummonerSearch from './SummonerSearchBar';
import SummonerDetails from './SummonerDetails';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';

//RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8 API KEY

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path='/' exact component={SummonerSearch} />
              <Route path='/user/:server/:userId/:accountId' exact component={SummonerDetails} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
