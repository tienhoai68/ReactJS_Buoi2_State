import React, { Component } from 'react'

export default class Glass extends Component {
  render() {
    return (
      <div>
        <button  onClick={() => this.props.changeGlass("v1")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v1.png" alt="..." />
          </button>
          <button onClick={() => this.props.changeGlass("v2")}  className='btn col-2'>
            <img  className='w-100 img-fluid' src="./glassesImage/v2.png" alt="..." />
          </button>
          <button  onClick={() => this.props.changeGlass("v3")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v3.png" alt="..." />
          </button>
          <button onClick={() => this.props.changeGlass("v4")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v4.png" alt="..." />
          </button>
          <button  onClick={() => this.props.changeGlass("v5")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v5.png" alt="..." />
          </button>
          <button onClick={() => this.props.changeGlass("v6")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v6.png" alt="..." />
          </button>
          <button onClick={() => this.props.changeGlass("v7")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v7.png" alt="..." />
          </button>
          <button  onClick={() => this.props.changeGlass("v8")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v8.png" alt="..." />
          </button>
          <button onClick={() => this.props.changeGlass("v9")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v9.png" alt="..." />
          </button>        
      </div>
    )
  }
}
