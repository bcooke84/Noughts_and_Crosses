import React, { Component } from 'react';

export default class Button extends Component {


  render() {
    return (
        <button value={this.props.position} onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}
