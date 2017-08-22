import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment } from '../actions/index'
import { decrement } from '../actions/index'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button
          onClick={this.props.decrement}>-</button>
        <button
          onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment: increment, decrement: decrement }, dispatch)
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
