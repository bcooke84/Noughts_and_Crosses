import React, { Component } from 'react';
import Button from "../components/button.js";

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [0,0,0,0,0,0,0,0,0]
    }
  }

  render() {
    return (
      <div id= "board-div">
      <table id = "board">
        <tr id="row-one">
          <td id = "cell-one"> <Button position={this.state.cells[0]}/> </td>
          <td id = "cell-two"> <Button/> </td>
          <td id = "cell-three"> <Button/> </td>
        </tr>
        <tr id="row-two">
          <td id = "cell-four"> <Button/> </td>
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
