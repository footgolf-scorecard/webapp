import React, { Component } from 'react';

class NavBar extends Component {
  handleClick() {}

  render() {
    return (
      <div className="navWide">
        <div className="fgHead">Test1</div>
        <div className="fgButton">
          <button onClick={this.handleClick}>Login</button>
        </div>
      </div>
    );
  }
};


export default NavBar;
