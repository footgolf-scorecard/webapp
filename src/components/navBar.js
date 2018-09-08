import React, { Component } from 'react';


class NavBar extends Component {
  handleClick() {}

  render() {
    return (
      <div class = "navBody">
      <div className="navWide" class="row1">
        <div className="wideTop">
        <div class="column1">
         <div className="fgHead">Footgolf Scorecard</div>
        </div>
        <div class="column2">
        <div className="fgButton">
         <button onClick={this.handleClick}>Login</button>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
};


export default NavBar;
