import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';


class SummonerSearchBar extends Component {
  state = {searchTerm: ''}

  onChangeHandler = (e) => {
    this.setState({searchTerm: e.target.value})
    
  }

  render() {
    return (
      <div>
        <input value={this.state.searchTerm} onChange={this.onChangeHandler}/>
        <button onClick={() => this.props.fetchUser(this.state.searchTerm)}></button>
        {console.log('e',this.props.user)}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {user: state.user}
}

export default connect(mapStateToProps, {fetchUser})(SummonerSearchBar);