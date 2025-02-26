import React, { Component } from 'react'
import "../Loader.css"
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="loader"></div>
      </div>
    )
  }
}

export default Spinner
