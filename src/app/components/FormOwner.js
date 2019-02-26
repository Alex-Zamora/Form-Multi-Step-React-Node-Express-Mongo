import React, { Component } from 'react'

export default class FormOwner extends Component {

  nextClick = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  prevClick = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { name, lastName, age, phone, email } = this.props;
    return (
      <div>
        <h2>Owner Update</h2>
        <br/>
        <br/>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          defaultValue={name}
          onChange={this.props.handleChange('name')}
        />

        <label htmlFor="lastName">Last Namte</label>
        <input
          type="text"
          defaultValue={lastName} 
          onChange={this.props.handleChange('lastName')}
        />

        <label htmlFor="age">Age</label>
        <input type="text"
          defaultValue={age}
          onChange={this.props.handleChange('age')}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="number" 
          defaultValue={phone}
          onChange={this.props.handleChange('phone')}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          defaultValue={email}
          onChange={this.props.handleChange('email')}
        />
        <br/>
        <br/>
        <button onClick={this.prevClick}>Prev</button>
        <button onClick={this.nextClick}>Next</button>
      </div>
    )
  }
}
