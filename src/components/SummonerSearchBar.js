import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import {Field, reduxForm} from 'redux-form';


class SummonerSearch extends Component {

  renderError = (formProps) => {
    console.log('rendererror',formProps)
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
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off'/>
        <div>{this.renderError(formProps)}</div>
        {console.log('meta',formProps.meta)}
      </div>
    )
  }

  renderSelect = (formProps) => {
    return(
      <div>
        <select  {...formProps.input}>
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
      <div>
        {/* <select onChange={this.onSelectHandler}>
          <option value="EUW1">EU WEST</option>
          <option value="EUN1">EU NE</option>
        </select>
        <input value={this.state.searchTerm} onChange={this.onChangeHandler}/>
        <button onClick={() => this.props.fetchUser(this.state.searchTerm, this.state.server)}>SUBMIT</button>
        {console.log('e',this.props.user)} */}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          
            <Field name='summonerName' component={this.renderInput} label='Enter a summoner name'/>
            <Field name='serverSelection' component={this.renderSelect} />
          
          <button >Submit</button>
          {console.log(this.props.user)}
        </form>
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