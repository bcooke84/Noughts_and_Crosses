import React, { Component } from 'react';
import Button from "../components/button.js";
import "./board.css"

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [" ", " ", " ", " ", " ", " ", " "," ", " "],
      next: "O"
    }
    this.checkResult = this.checkResult.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event){
    event.target.disabled = true;

    const tempArray = this.state.cells
    tempArray[event.target.value] = this.state.next
    this.setState({cells: tempArray})

    if(this.state.next === "O" ){
      this.setState({next: "X"})
    } else {
      this.setState({next: "O"})
    }

    const col1 = this.checkResult(0,3,6);
    const col2 = this.checkResult(1,4,7);
    const col3 = this.checkResult(2,5,8);
    const row1 = this.checkResult(0,1,2);
    const row2 = this.checkResult(3,4,5);
    const row3 = this.checkResult(6,7,8);
    const diag1 = this.checkResult(2,4,6);
    const diag2 = this.checkResult(0,4,8);

    const resultsArray = [col1, col2, col3, row1, row2, row3, diag1, diag2]

    resultsArray.forEach((item, index) => {
      if(item !== false){
        this.gameFinished(item);
      } else {
        if(index === resultsArray.length){
          if(!tempArray.includes(" ")){
            this.gameFinished("draw")
          }
        }

      }

    })

  }

  gameFinished(winner){
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
      button.disabled = true;
    })

    const pTag = document.getElementById('winner')

    if(winner === "draw"){
      pTag.textContent = "The game was a draw"
    }else{
      pTag.textContent = "The winner is " + winner;
    }

  }

  checkResult (index1, index2, index3) {

    const cells = this.state.cells;
    const testArray = [cells[index1], cells[index2], cells[index3]];
    if (testArray.includes(" ")) {
      return false;
    }
    else {
      if (testArray.includes("O") && testArray.includes("X")) {
        return false;
      }
      else {
        if (testArray.includes("O")) {
          return "O";
        }
        else {
          return "X";
        }
      }
    }
  }

  render() {
    return (
      <div id= "board-div">
        <table id = "board">
          <tr id="row-one">
            <td id = "cell-one" className="cell"> <Button position='0' onClick={this.handleButtonClick} value={this.state.cells[0]}/> </td>
            <td id = "cell-two" className="cell"> <Button position='1' onClick={this.handleButtonClick} value={this.state.cells[1]}/> </td>
            <td id = "cell-three" className="cell"> <Button position='2' onClick={this.handleButtonClick} value={this.state.cells[2]}/> </td>
          </tr>
          <tr id="row-two">
            <td id = "cell-four" className="cell"> <Button position='3' onClick={this.handleButtonClick} value={this.state.cells[3]}/> </td>
            <td id = "cell-five" className="cell"> <Button position='4' onClick={this.handleButtonClick} value={this.state.cells[4]}/> </td>
            <td id = "cell-six"className="cell"> <Button position='5' onClick={this.handleButtonClick} value={this.state.cells[5]}/> </td>
          </tr>
          <tr id="row-three">
            <td id = "cell-seven" className="cell"> <Button position='6' onClick={this.handleButtonClick} value={this.state.cells[6]}/> </td>
            <td id = "cell-eight" className="cell"> <Button position='7' onClick={this.handleButtonClick} value={this.state.cells[7]}/> </td>
            <td id = "cell-nine" className="cell"> <Button position='8' onClick={this.handleButtonClick} value={this.state.cells[8]}/> </td>
          </tr>
        </table>

        <p id="winner"> </p>
      </div>
    )
  }
}
