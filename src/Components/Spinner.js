import React, { Component } from 'react'
import loader from './loader.gif'
const Spinner = ()=> {
  // render() {
    return (
      <div className='text-center' >
        <img src={loader} alt="Loader"  />
      </div>
    )
  // }
}

export default Spinner