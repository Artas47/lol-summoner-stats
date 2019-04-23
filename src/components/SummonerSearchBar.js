import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import {Field, reduxForm} from 'redux-form';

import './SummonerSearchBar.scss';
import { relative } from 'path';

class SummonerSearch extends Component {

  renderError = (formProps) => {
    if(formProps.meta.touched && formProps.meta.error && formProps.meta.submitFailed){
      return(
        <div>{formProps.meta.error}</div>
      )
    }
    return null
  }

  renderInput = (formProps) => {
    return(
      <div>
        <label className='header--label'>{formProps.label}</label>
        <div className=''>
          <input  className='header--input' {...formProps.input} autoComplete='off'/>
        </div>
        <div>{this.renderError(formProps)}</div>
      </div>
    )
  }

  renderSelect = (formProps) => {
    return(
      <div>
        <select className='header--select' {...formProps.input}>
          <option value='euw1'>EU WEST</option>
          <option value='eun1'>EU NE</option>
        </select>
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.fetchUser(formValues.summonerName, formValues.serverSelection)
  }

  render() {
    return (
      <div style={{position: relative}}>
        <div className='header'>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name='summonerName' component={this.renderInput} label='Enter a summoner name'/>
              <Field name='serverSelection' component={this.renderSelect} />
            <button className='header--submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.summonerName){
    errors.summonerName = 'it cannot be empty'
  }
  return errors
}

const mapStateToProps = (state) =>{
  return {user: state.user}
}

export default connect(mapStateToProps, {fetchUser})(reduxForm({
  form: 'SummonerSearchForm',
  validate: validate,
  initialValues: {serverSelection: 'euw1'}
})(SummonerSearch));