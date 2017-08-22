import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}

export default Counter
