import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Propety.sass';

export default class Propety extends Component {
  render() {
    const { _id, adress, owner, salePrice } = this.props.propety; 
    return (
      <div className="propety-card">
        <Link to={`/edit/${_id}`}>
        <div className="description">
          <div className="adress">
            <h3>Adress</h3>
            <ul>
              <li><span>State:</span> { adress.state }</li>
              <li><span>City:</span> { adress.city }</li>
              <li><span>Colony:</span> { adress.colony }</li>
              <li><span>Number:</span> #{ adress.number }</li>
            </ul>
          </div>
          <div className="owner">
            <h3>Owner</h3>
            <ul>
              <li><span>Name:</span> { owner.name }</li>
              <li><span>Last Name:</span> { owner.lastName }</li>
              <li><span>Age:</span> { owner.age }</li>
              <li><span>Phone:</span> { owner.phone }</li>
              <li><span>Email:</span> { owner.email }</li>
            </ul>
          </div>
        </div>
        <div className="price">
          <h3>$ { salePrice }</h3>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
        </Link>
      </div>
    )
  }
}
