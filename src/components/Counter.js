import React, { Component } from 'react';
import styled from 'styled-components';

const CounterContainer  = styled.div`
    padding: 1rem 2rem;
    background: rgb(0,0,0,0.3);
    margin: 1rem;
`;

const CounterButton = styled.button`
    background-color: #61dafb;
    border: none;
    font-weight: bold;
    color: #282c34;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    &:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    &.button-reset{
        background: white;
    }
`;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }
    
    resetButton(){
        this.setState({
            count: 0
        })
    }
    
    render() {
        return (
            <CounterContainer>
                <h4>Counter.js</h4>
                <CounterButton onClick={this.handleClick.bind(this)}>+ 1</CounterButton>
                <CounterButton className="button-reset" onClick={this.resetButton.bind(this)}>Reset</CounterButton>
                <p>{this.state.count}</p>
            </CounterContainer>
        );
    }
}


export default Counter;