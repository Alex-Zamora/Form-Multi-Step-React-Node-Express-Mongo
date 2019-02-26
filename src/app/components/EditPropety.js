import React, { Component } from 'react';
import FormAdress from './FormAdress';
import FormOwner from './FormOwner';
import FormPrice from './FormPrice';
import { Redirect } from 'react-router-dom';

export default class EditPropety extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      state: '',
      city: '',
      colony: '',
      number: '',
      name: '',
      lastName: '',
      age: '',
      phone: '',
      email: '',
      salePrice: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:3000/api/propeties/${id}`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      this.setState({
        state: data.adress.state,
        city: data.adress.city,
        colony: data.adress.colony,
        number: data.adress.number,
        name: data.owner.name,
        lastName: data.owner.lastName,
        age: data.owner.age,
        phone: data.owner.phone,
        email: data.owner.email,
        salePrice: data.salePrice
      });
    });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  updatePropety = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const data = {
      adress: {
        state: this.state.state,
        city: this.state.city,
        colony: this.state.colony,
        number: this.state.number
      },
      owner: {
        name: this.state.name,
        lastName: this.state.lastName,
        age: this.state.age,
        phone: this.state.phone,
        email: this.state.email
      },
      salePrice: this.state.salePrice
    }
    fetch(`http://localhost:3000/api/propeties/${id}`, { 
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Accept: "applications/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Error:', err))
    .then(res => {
      this.props.history.push('/');
      console.log('Success:', res);
    });
  }

  renderSwitch = (step) => {
    const {
      state, city, colony, number, 
      name, lastName, age, phone, email,
      salePrice } = this.state;
    switch(step) {
      case 1:
        return <FormAdress 
                  prevStep={this.prevStep} 
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  state={state}
                  city={city}
                  colony={colony}
                  number={number}
                />
      case 2:
        return <FormOwner 
                  prevStep={this.prevStep} 
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  name={name}
                  lastName={lastName}
                  age={age}
                  phone={phone}
                  email={email}
                />
      case 3:
        return <FormPrice 
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  salePrice={salePrice}
                />
    }
  }

  render() {
    const { step } = this.state;

    return (
      <form onSubmit={this.updatePropety}>
        {this.renderSwitch(step)}
      </form>
    )
  }
}
