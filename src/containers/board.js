import React, { Component } from 'react';
import Button from "../components/button.js";

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [0,0,0,0,0,0,0,0,0]
    }

  this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event){
    const tempArray = this.state.cells
    tempArray[event.target.value] = 2
    console.log('handleButtonClick() event: ', event.target);
    // console.log(tempArray);
    // console.log("button clicked");
    this.setState({cells: tempArray})
  }

  render() {
    return (
      <div id= "board-div">
      <table id = "board">
        <tr id="row-one">
          <td id = "cell-one"> <Button position='0' onClick={this.handleButtonClick} value={this.state.cells[0]}/> </td>
          <td id = "cell-two"> <Button position='1'/> </td>
          <td id = "cell-three"> <Button position='2'/> </td>
        </tr>
        <tr id="row-two">
          <td id = "cell-four"> <Button position='3'/> </td>
          <td id = "cell-five"> <Button/> </td>
          <td id = "cell-six"> <Button/> </td>
        </tr>
        <tr id="row-three">
          <td id = "cell-seven"> <Button/> </td>
          <td id = "cell-eight"> <Button/> </td>
          <td id = "cell-nine"> <Button/> </td>
        </tr>
      </table>
      </div>
    )
  }
}
