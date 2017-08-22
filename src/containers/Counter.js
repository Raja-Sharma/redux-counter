import React, { Component } from 'react'
import { connect } from 'react-redux'

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

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
