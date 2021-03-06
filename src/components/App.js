import React, { Component } from 'react';
import SummonerSearch from './SummonerSearchBar';
import SummonerDetails from './SummonerDetails';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';

import styled from 'styled-components';

import './main.scss';


export default class App extends Component {
  render() {
    return (
        <div>
          <Router history={history}>
            <div>
              <Switch>
                <Route path='/' exact component={SummonerSearch} />
                <Route path='/user/:summonerName/:server/:userId/:accountId' exact component={SummonerDetails} />
              </Switch>
            </div>
          </Router>
        </div>
    )
  }
}
