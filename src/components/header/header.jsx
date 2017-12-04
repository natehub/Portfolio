import React from 'react';
import ReactDOM from 'react-dom';
var $ = require("jquery");
import { withBaseIcon } from 'react-icons-kit';
/*import { horizontalCenter } from 'react-icons-kit';
    const MyButton = 
        horizontalCenter(
            props => <button>{props.children}</button>
        );*/

//import icons 

import { navicon } from 'react-icons-kit/fa/navicon';

const IconRed64 = withBaseIcon({ size: 20, style: { color: 'white' } });

var _menubtn = React.createClass({
  render: function () {
    return (
      <IconRed64 icon={navicon} className="home_icon" />
    );
  }
});


var _nav = React.createClass({
increase: function(e) {
    
var p = $( "#slide-out" );
var pp = p.position();
if (pp.left == 0){
$(p).animate({left: '-250px'});
}
else if (pp.left==-250){
  $(p).animate({left: '0px'});
}
  console.log(pp.left)
  },

  render: function () {
    return (
     <nav className="nav_bar">

        <ul>
           <li className="left "><a className="nav-items" onClick={this.increase} href="#about"><_menubtn /></a></li>
          <li className="left "><a className="logo-wrapper" href="#about">DEEPvision</a></li>
          <li className="right "><a className="nav-items" href="#home">View It</a></li>
          <li className="right "><a className="nav-items" href="#news">Map It</a></li>
          <li className="right "><a className="nav-items" href="#contact">Tag It</a></li>
          
        </ul>
          <div className="color_div"></div>
    </nav>
    );
  }
});

export default _nav;

 /*<nav className="nav_bar">
        <div className="nav-wrapper">
          <a onClick={this.increase}><_menubtn /></a>
          <a href="#" className="brand-logo">DEEPvision</a>
          <ul id="nav-mobile" className="">
            <a href="/about">Sample Page</a>
            <a href="/repos">Map Page</a>
            <a >Image Page</a>
          </ul>
        </div>
        <div className="color_div"></div>
      </nav>*/