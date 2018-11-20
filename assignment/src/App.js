import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    word: '',
    lenWord: null,
    wordArray: []
  };

  changeHandler = (event) =>{
    let string = event.target.value;
    let wA = string.split('');
    
    wA.map((l, i) => {          
      let keyId = window.performance.now() + i;
      let wordObject = {char: l, id: keyId};
      
      let arr = [];
      let arrayTemp = this.state.wordArray;
      
      arr = arrayTemp.concat([wordObject]);      

      this.setState({
        word: string,
        lenWord: string.length,
        wordArray: arr        
      })

    }); 
    
    
  }

  removeHandler = (event, index) =>{
    //console.log(this.state)
  }

  render() {
    
    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'
    }

    let letter = null;
    if(this.state.lenWord > 0){

      const newWord = {...this.state};
      //const letters = newWord.word.split('');
      const letters = this.state.wordArray;
      //const letters = {...this.state.wordArray};

      //console.log({...this.state.wordArray});

      letter = (        
        <div>
          { letters.map((l, i) => {
            
            return <CharComponent 
                    style={style}
                    letter={l.char} 
                    key={l.id} 
                    click={(event) => this.removeHandler(event, l.id)}
                    />
          })}          
        </div>
      );

    }    
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input 
        type="text"
        onChange={this.changeHandler}
        />
        <p>Length of the text: {this.state.lenWord}</p>
        <ValidationComponent 
          tamanho={this.state.lenWord}
        />
        {letter}
      </div>
    );
  }
}

export default App;
