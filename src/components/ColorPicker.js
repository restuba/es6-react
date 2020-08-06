import React, { Component } from 'react';
import styled from 'styled-components';

let intensityArr = Array.apply(null, Array(257)).map(function(_, i) {return i}).filter(function(i){ return i % 32 === 0 && i !==0});

const ColorpickerContainer = styled.div`
    padding: 1rem 2rem;
    margin: 1rem;
    background: rgb(0,0,0,0.3);
    &>ul{
        width: 240px;
        height: 200px;
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            float: left;
            width: 28px;
            height: 24px;
            margin: 0;
            padding: 0;
            position: relative;
            a{
                width: 100%;
                height: 100%;
                display: block;
                cursor: crosshair;
                &:hover{
                    border: 1px solid #fff;
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
    
`;

const ContainerStyle = styled.div`
	padding: 1rem;
    font-size: 16px;
    text-align: left;
`;

const BoxStyle = styled.div`
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin: 0 20px 0 0;
    float: left;
`;

const Button = styled.button`
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
    &.theme{
        margin: 1rem 0;
        width: 100%;
    }
`;

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blue_index: 0,
            sampled: [40, 44, 52]
        }
    }

    handleShiftLeft(){
        if(this.state.blue_index > 0) {
            this.setState({
                blue_index: this.state.blue_index - 1
            });
        }else{
            return;
        }
    }

    handleShiftRight(){
        if(this.state.blue_index < intensityArr.length - 1){
            this.setState({
                blue_index: this.state.blue_index + 1
            })
        }else{
            return;
        }
    }

    handleSelection(val){
        this.setState({
            sampled: val
        })
    }

    render() {
        let boxes = [], blue_hue = intensityArr[this.state.blue_index] - 1;

        for(let r=0; r<intensityArr.length; r++){
            for(let g=0; g<intensityArr.length; g++){
                let rgb_arr = [];
                rgb_arr.push(intensityArr[r] - 1);
                rgb_arr.push(intensityArr[g] - 1);
                rgb_arr.push(blue_hue);
                boxes.push(<ColorBox key={r + ',' + g + ',' + blue_hue} rgb={rgb_arr} rgbArraySelected={this.handleSelection.bind(this)}/>);
            }
        }
        return (
            <ColorpickerContainer>
                <h4>Change Theme</h4>
                <ColorControls hue={this.state.blue_index} shiftLeft={this.handleShiftLeft.bind(this)} shiftRight={this.handleShiftRight.bind(this)}/>
                <ul>{boxes}</ul>
                <ColorSampling sample={this.state.sampled}/>
                <Button className="theme" onClick={() => this.props.changeColor(this.state.sampled)}>Apply a theme</Button>
            </ColorpickerContainer>
        );
    }
}

//Komponen pilihan warna yang dapat diklik dan memberikan informasi warna
const ColorBox = ({rgbArraySelected, rgb}) => (
	<li style={{backgroundColor: `rgb(${rgb.join()})`}} className="boxstyle" onClick={() => rgbArraySelected(rgb)}></li>
)

//Komponen yang mengatur set warna
const ColorControls = ({shiftLeft, shiftRight, hue}) => (
	<div>
		<Button onClick={shiftLeft}>&#8592;</Button>
		<Button className="play" onClick={shiftRight}>&#8594;</Button><br/>
		<small><em>Blue hue: <strong>{intensityArr[hue] - 1}</strong></em></small>
	</div>
)

//Komponen yang menampilkan warna terpilih
const ColorSampling = ({sample}) => (
	<ContainerStyle>
		<BoxStyle style={{backgroundColor: 'rgb(' + sample.join() + ')'}}>&nbsp;</BoxStyle>
		<div>
			<span>R: <strong>{sample[0]}</strong></span><br/>
			<span>G: <strong>{sample[1]}</strong></span><br/>
			<span>B: <strong>{sample[2]}</strong></span>
		</div>
	</ContainerStyle>
);

export default ColorPicker;