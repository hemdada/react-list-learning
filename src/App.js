import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {

  state = {
      inputText : ''
  }

  inputTextChangeHandler = (event) => {
      this.setState({inputText: event.target.value});
  };


  deleteCharHandler = (inputTextIndex) => {
    const inputTextTemp = this.state.inputText.split('');
    inputTextTemp.splice(inputTextIndex, 1);
    this.setState({inputText : inputTextTemp.join('')});
  };

  render() {

      const charItems = this.state.inputText.split('').map((char, index) => {
          return <Char char={char} key={index} click={() => this.deleteCharHandler(index)}/>
      });


    return (
        <div className="App">
            <p>Input Text</p>
            <input type="text" onChange={this.inputTextChangeHandler} value={this.state.inputText} />
            <p>Input Text Display</p>
            <p>{this.state.inputText}</p>
            <Validation inputTextLength={this.state.inputText.length} />
            {charItems}
        </div>
    );
  }
}

export default App;
