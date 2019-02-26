import React, { Component } from 'react'

export default class FormPrice extends Component {

  nextClick = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  prevClick = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { salePrice } = this.props;
    return (
      <div>
        <h2>Sale Price Update</h2>
        <br/>
        <br/>
        <label htmlFor="salePrice">Sale Price</label>
        <input
          type="number"
          defaultValue={salePrice}
          onChange={this.props.handleChange('salePrice')}
        />
        
        <br/>
        <br/>
        <button onClick={this.prevClick}>Prev</button>
        <button type="submit">Update</button>
      </div>
    )
  }
}
