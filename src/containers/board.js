import React, { Component } from 'react';
import Button from "../components/button.js";

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [0,0,0,0,0,0,0,0,0],
      next: 1
    }
    this.checkResult = this.checkResult.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event){
    event.target.disabled = true;

    const tempArray = this.state.cells
    tempArray[event.target.value] = this.state.next
    this.setState({cells: tempArray})

    if(this.state.next === 1 ){
      this.setState({next: 2})
    } else {
      this.setState({next: 1})
    }

    const col1 = this.checkResult(0,3,6);
    const col2 = this.checkResult(1,4,7);
    const col3 = this.checkResult(2,5,8);
    const row1 = this.checkResult(0,1,2);
    const row2 = this.checkResult(3,4,5);
    const row3 = this.checkResult(6,7,8);
    const diag1 = this.checkResult(2,4,6);
    const diag2 = this.checkResult(0,4,8);
  }

  checkResult (index1, index2, index3) {

    const cells = this.state.cells;
    const testArray = [cells[index1], cells[index2], cells[index3]];
    if (testArray.includes(0)) {
      return false;
    }
    else {
      if (testArray.includes(1) && testArray.includes(2)) {
        return false;
      }
      else {
        if (testArray.includes(1)) {
          return 1;
        }
        else {
          return 2;
        }
      }
    }
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
