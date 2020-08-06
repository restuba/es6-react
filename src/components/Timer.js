import React, { Component } from 'react';
import styled from 'styled-components';

const TimerContainer  = styled.div`
    padding: 1rem 2rem; 
    margin: 1rem;
    background: rgb(0,0,0,0.3);
`;

const TimerButton = styled.button`
    background-color: #61dafb;
    border: none;
    color: #282c34;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
    transition-duration: 0.4s;
    &:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    &.play{
        background: white;
    }
`;

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            secElapsed: 0,
            isPaused: false,
            txtButton: "Pause"
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillMount(){
        clearInterval(this.interval);
    }

    tick(){
        this.setState({
            secElapsed: this.state.secElapsed + 1
        })
    }

    pause(){
        if(this.state.isPaused){
            this.interval = setInterval(this.tick.bind(this), 1000);
            this.setState({
                txtButton: "Paused"
            })
        }else{
            clearInterval(this.interval);
            this.setState({
                txtButton: "Play"
            })
        }
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    render() {
        return (
            <TimerContainer>
                <h4>Timer</h4>
                <p>Detik terlewati: {this.state.secElapsed}</p>
                <TimerButton className={this.state.isPaused ? 'paused' : 'play'} onClick={this.pause.bind(this)}>{this.state.txtButton}</TimerButton>
            </TimerContainer>
        );
    }
}

export default Timer;