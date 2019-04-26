import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserMatches, fetchUser, fetchUserLeagueDetails} from '../actions';
import {Link} from 'react-router-dom';
import Match from './Match';


import './SummonerDetails.scss';


class SummonerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchUserMatches(this.props.match.params.accountId, this.props.match.params.server)
    this.props.fetchUserLeagueDetails(this.props.match.params.userId, this.props.match.params.server)
  }

  componentDidUpdate = (prevProps) => {
    if(!prevProps.user.id){
      this.props.fetchUser(this.props.match.params.summonerName, this.props.match.params.server)
    }
  }

  renderLeague = () => {
    if(this.props.league[0]){
      return(
        <div>
          <div>
            {this.props.league[0].tier}
            {this.props.league[0].rank}
          </div>
          <div>
            WINS : {this.props.league[0].wins}
            LOSSES : {this.props.league[0].losses}
          </div>
        </div>
      )
    }
    return (
      <div>NO LEAGUE</div>
    )
    
  }
  
  renderDetails = () => {
    return (
      <div className='user-box'>
        <div className='user-box--name'>
          {this.props.user.name}
        </div>
          <span className='user-box--level'>{this.props.user.summonerLevel}</span>
          <img className='user-box--img' src={`https://opgg-static.akamaized.net/images/profile_icons/profileIcon${this.props.user.profileIconId}.jpg`} />
          {this.renderLeague()}
      </div>
    )
  }

  renderMatches = () => {
    return this.props.matches.map((match) => {
     return <Match matchId={match.gameId} lane={match.lane} championId={match.champion}/>
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
            <div className='matches-box'>
              {this.renderMatches()}  
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, league: state.league, formValues: state.form, matches: Object.values(state.matches)}
}

export default connect(mapStateToProps, {fetchUserMatches, fetchUser, fetchUserLeagueDetails})(SummonerDetails);