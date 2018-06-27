import React, { Component } from 'react';
import Button from "../components/button.js";

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [0,0,0,0,0,0,0,0,0],
      next: 1
    }

  this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event){
    const tempArray = this.state.cells
    tempArray[event.target.value] = this.state.next
    this.setState({cells: tempArray})

    if(this.state.next === 1 ){
      this.setState({next: 2})
    } else {
      this.setState({next: 1})
    }

    event.target.disabled = true;

  }

  render() {
    return (
      <div id= "board-div">
      <table id = "board">
        <tr id="row-one">
          <td id = "cell-one"> <Button position='0' onClick={this.handleButtonClick} value={this.state.cells[0]}/> </td>
          <td id = "cell-two"> <Button position='1' onClick={this.handleButtonClick} value={this.state.cells[1]}/> </td>
          <td id = "cell-three"> <Button position='2' onClick={this.handleButtonClick} value={this.state.cells[2]}/> </td>
        </tr>
        <tr id="row-two">
          <td id = "cell-four"> <Button position='3' onClick={this.handleButtonClick} value={this.state.cells[3]}/> </td>
          <td id = "cell-five"> <Button position='4' onClick={this.handleButtonClick} value={this.state.cells[4]}/> </td>
          <td id = "cell-six"> <Button position='5' onClick={this.handleButtonClick} value={this.state.cells[5]}/> </td>
        </tr>
        <tr id="row-three">
          <td id = "cell-seven"> <Button position='6' onClick={this.handleButtonClick} value={this.state.cells[6]}/> </td>
          <td id = "cell-eight"> <Button position='7' onClick={this.handleButtonClick} value={this.state.cells[7]}/> </td>
          <td id = "cell-nine"> <Button position='8' onClick={this.handleButtonClick} value={this.state.cells[8]}/> </td>
        </tr>
      </table>
      </div>
    )
  }
}
