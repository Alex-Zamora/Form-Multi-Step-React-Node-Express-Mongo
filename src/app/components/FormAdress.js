import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FormAdress extends Component {

  nextClick = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { state, city, colony, number } = this.props;
    return (
      <div>
        <h2>Adress Update</h2>
        <br/>
        <br/>
        <label htmlFor="state">State</label>
        <input
          type="text"
          defaultValue={state}
          onChange={this.props.handleChange('state')}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          defaultValue={city} 
          onChange={this.props.handleChange('city')}
        />

        <label htmlFor="colony">Colony</label>
        <input type="text"
          defaultValue={colony}
          onChange={this.props.handleChange('colony')}
        />

        <label htmlFor="number">Number</label>
        <input
          type="number" defaultValue={number}
          onChange={this.props.handleChange('number')}
        />
        <br/>
        <br/>
        <Link to='/' >
          <button>List Propeties</button>
        </Link>
        <button onClick={this.nextClick}>Next</button>
      </div>
    )
  }
}
