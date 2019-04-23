import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserMatches, fetchUser} from '../actions';
import {Link} from 'react-router-dom';
import Match from './Match';

import './SummonerDetails.scss';


class SummonerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchUserMatches(this.props.match.params.accountId, this.props.match.params.server)
  }

  renderDetails = () => {
    if(!this.props.user.summonerLevel){
      this.props.fetchUser(this.props.match.params.summonerName, this.props.match.params.server)
    }
    return (
      <div>
      <div>
        {this.props.user.name}
      </div>
        <div>
          <span>{this.props.user.summonerLevel}</span>
          <img src={`https://opgg-static.akamaized.net/images/profile_icons/profileIcon${this.props.user.profileIconId}.jpg`} />
        </div>
      </div>
    )
  }

  renderMatches = () => {
    return this.props.matches.map((match) => {
     return <Match lane={match.lane} championId={match.champion}/>
    })
  }



  render() {
    return (
      <div className='details'>
        <div>
          <Link to='/'>Go back</Link>
        </div>
        <div>
          <div>
            {this.renderDetails()}    
            {this.renderMatches()}  
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, formValues: state.form, matches: Object.values(state.matches)}
}

export default connect(mapStateToProps, {fetchUserMatches, fetchUser})(SummonerDetails);