import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div>
        <img className='w-25 mx-auto d-block' src="./glassesImage/model.jpg" alt="" />
          <div>
            <img style={{width: "14%", top: "26%", right: "43%"}} className=' img-fluid  position-absolute' src={this.props.state.imgUrl}  alt="" />
          </div>
      </div>
    )
  }
}
