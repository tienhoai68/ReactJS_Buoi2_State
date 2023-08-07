import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import "./style/style.css"
export default class TryGlassAppOnline extends Component {
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
    <div className='bg'>
    <Header/>
    <Body changeGlass ={this.changeGlass} state ={this.state}/>
    </div>
    )
  }
}
