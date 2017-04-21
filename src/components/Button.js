import React, { Component } from 'react';
import Message from './Message'
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '',
      left: '',
      leftmarg: 44,
      hoverCount: 0,
      message: <h1>Click this button</h1>
    };
    this.hi = this.hi.bind(this);
  }

  hi() {
    if (this.state.hoverCount > 0 ) {
      this.setState({
        top: Math.floor((Math.random() * (window.innerHeight - (window.innerHeight * .1))) + 0),
        left: Math.floor((Math.random() * (window.innerWidth - (window.innerWidth * .1))) + 0),
        message: <div><h2>vinny@vinnymartinez.com</h2><p className='pMarg'>say hi!</p></div>
      });
    }
    else {
      this.setState({
        top: Math.floor((Math.random() * (window.innerHeight - (window.innerHeight * .1))) + 0),
        left: Math.floor((Math.random() * (window.innerWidth - (window.innerWidth * .1))) + 0),
        leftmarg: 0,
        hoverCount: this.state.hoverCount + 1,
        message: <h1>😂😂😂😂😂😂😂😂</h1>
      });
      console.log('Visit my LinkedIn at https://www.linkedin.com/in/vinnymartinez');
    }
  }

  render() {
    return (
      <div className='buttonAndMessage'>
        <Message message={this.state.message} />
        <div className="Button">
          <a href='#' className="button" onMouseOver={this.hi} style={{top: this.state.top + 'px', left: this.state.left + 'px', marginLeft: this.state.leftmarg + 'vw'}}>a button</a>
        </div>
      </div>
    );
  }
}

export default Button;
