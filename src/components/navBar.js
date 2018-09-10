import React, { Component } from 'react';


class NavBar extends Component {
  handleClick() {}

  render() {
    return (
      <div className= "navBody">
        <div className="navWide" className="row1">
          <div className="wideTop">
            <div className="column1">
             <div className="fgHead">Footgolf Scorecard</div>
            </div>
            <div className="column2">
              <div className='fgButton'>
               <button>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default NavBar;
