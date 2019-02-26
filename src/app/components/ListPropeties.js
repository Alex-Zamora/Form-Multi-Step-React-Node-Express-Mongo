import React, { Component } from 'react';
import '../css/ListPropeties.sass';
import Propety from './Propety';

export default class ListPropeties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propeties: []
    }
  }

  componentDidMount() {
    this.getPropeties();
  }

  getPropeties = () => {
    fetch('http://localhost:3000/api/propeties/', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({ propeties: data });
      })
  }

  render() {
    return (
      <div className='wrapper-list'>
        {
          this.state.propeties.map((propety, key) => {
            return <Propety key={key} propety={propety} />
          })
        }
      </div>
    )
  }
}
