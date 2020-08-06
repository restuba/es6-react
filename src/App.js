import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ColorPicker from './components/ColorPicker';
import Cardbox from './components/Cardbox';

const MainContainer = styled.div`
  display: grid;  
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto; 
  grid-gap: 1.5rem;

  @media only screen and (max-width: 880px){
      grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 720px){
      grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 600px){
      grid-template-columns: repeat(1, 1fr);
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: [40, 44, 52]
    }
  }

  handleSelection = (colorNew) => {
    this.setState({
      backgroundColor: colorNew
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: 'rgb(' + this.state.backgroundColor.join() + ')' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MainContainer>
            <Timer />
            <Counter />
            <ColorPicker changeColor={this.handleSelection.bind(this)} />
          </MainContainer>
          <div style={{ padding: " 1.5rem" }}>
            <Cardbox />
          </div>
        </header>
      </div>
    );
  }

}

export default App;
