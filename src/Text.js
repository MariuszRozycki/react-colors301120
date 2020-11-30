import React, { Component } from 'react';
import './Text.css';

class Text extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorValue: this.props.initColor,
      inputValue: ''
    }
  }

  changeToColorRed = () => {
      this.setState({colorValue: 'red'})
  }

  changeToColorGreen = () => {
      this.setState({colorValue: 'green'})
  }

  changeToColorBlue = () => {
      this.setState({colorValue: 'blue'})
  }

  inputHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  
    render() {
      return(
        <React.Fragment> 
          <input placeholder='wpisz cos...' onChange={this.inputHandler} type="text"/>
          <h1 className={this.state.colorValue}>{this.state.inputValue}</h1>
          <button onClick={this.changeToColorRed}>Kolor czerwony</button>
          <button onClick={this.changeToColorGreen}>Kolor zielony</button>
          <button onClick={this.changeToColorBlue}>Kolor niebieski</button>
        </React.Fragment>
      );  
    }
  
}

export default Text;