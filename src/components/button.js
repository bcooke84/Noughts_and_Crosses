import React, { Component } from 'react';
import "./button.css"
export default class Button extends Component {


  render() {
    return (
        <button value={this.props.position} onClick={this.props.onClick} className="play-button">{this.props.value}</button>

    )
  }
}
