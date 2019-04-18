import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserMatches} from '../actions';
import {Link} from 'react-router-dom';

class SummonerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchUserMatches(this.props.match.params.accountId, this.props.match.params.server)
  }

  render() {
    return (
      <div>
        <Link to='/'>fds</Link>
        {console.log(this.props)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, formValues: state.form, matches: state.matches}
}

export default connect(mapStateToProps, {fetchUserMatches})(SummonerDetails);