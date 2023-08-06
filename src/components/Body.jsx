import React, { Component } from 'react'

export default class Body extends Component {
  state = {
    imgUrl: "./glassesImage/v1.png",
  }
  changeGlass = (name) => {
    this.setState({
      imgUrl: `./glassesImage/${name}.png`
    })
  }
  render() {
    return (
      <div>
        <div className='container position-relative'>
          <img className='w-25 mx-auto d-block' src="./glassesImage/model.jpg" alt="" />
          <div>
            <img style={{width: "14%", top: "26%", right: "43%"}} className=' img-fluid  position-absolute' src={this.state.imgUrl}  alt="" />
          </div>
        </div>
        <div style={{marginTop: 150}} className='row container mx-auto'>
          <button  onClick={() => this.changeGlass("v1")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v1.png" alt="" />
          </button>
          <button onClick={() => this.changeGlass("v2")}  className='btn col-2'>
            <img  className='w-100 img-fluid' src="./glassesImage/v2.png" alt="" />
          </button>
          <button  onClick={() => this.changeGlass("v3")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v3.png" alt="" />
          </button>
          <button onClick={() => this.changeGlass("v4")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v4.png" alt="" />
          </button>
          <button  onClick={() => this.changeGlass("v5")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v5.png" alt="" />
          </button>
          <button onClick={() => this.changeGlass("v6")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v6.png" alt="" />
          </button>
          <button onClick={() => this.changeGlass("v7")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v7.png" alt="" />
          </button>
          <button  onClick={() => this.changeGlass("v8")} className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v8.png" alt="" />
          </button>
          <button onClick={() => this.changeGlass("v9")}  className='btn col-2'>
            <img className='w-100 img-fluid' src="./glassesImage/v9.png" alt="" />
          </button>        
        </div>
      </div>
    )
  }
}
