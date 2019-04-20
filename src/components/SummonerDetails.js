import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserMatches, fetchUser1} from '../actions';
import {Link} from 'react-router-dom';


class SummonerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchUserMatches(this.props.match.params.accountId, this.props.match.params.server)
  }

  renderDetails = () => {
    if(!this.props.user.summonerLevel){
      this.props.fetchUser1(this.props.match.params.summonerName, this.props.match.params.server)
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

  render() {
    return (
      <div>
        <div>
          <Link to='/'>Go back</Link>
        </div>
        <div>
          <div>
            {this.renderDetails()}          
          </div>
          {console.log(this.props, 'propsy')}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, formValues: state.form, matches: state.matches}
}

export default connect(mapStateToProps, {fetchUserMatches, fetchUser1})(SummonerDetails);