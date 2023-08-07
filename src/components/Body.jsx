import React, { Component } from 'react'
import Glass from './Glass'
import Modal from './Modal'

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className='container position-relative'>
          <Modal state = {this.props.state}/>
        </div>
        <div style={{marginTop: 150}} className='row container mx-auto'>
          <Glass changeGlass = {this.props.changeGlass} />
        </div>
      </div>
    )
  }
}
