import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import "./style/style.css"
export default class TryGlassAppOnline extends Component {
  render() {
    return (
    <div className='bg'>
    <Header/>
    <Body/>
    </div>
    )
  }
}
