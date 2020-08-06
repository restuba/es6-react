import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const CardContainer = styled.div`
    display: grid;  
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto; 
    grid-gap: 1.5rem;
    @media only screen and (max-width: 1080px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (max-width: 880px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 720px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CardItem = styled.div`
    background: rgb(0,0,0,0.3);
    padding: 16px;
`;

export const ItemDisplay = props => {
    const item = props.data;

    return(
        <CardItem>
            <strong>{item.name}</strong>
            <br/>
            <p><small>&#9742; {item.phone}</small></p>
            <p>
                {item.company.name}<br/>
                <small>"{item.company.catchPhrase}"</small>
            </p>
            <p>
                Alamat<br/>{item.address.suite}, {item.address.street}, {item.address.city}
            </p>
        </CardItem>
    )
}

class Cardbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({
                    data: data
                })
            }
        })
    }

    render() {
        const items = this.state.data.map((item, index) => {
            return (
                <ItemDisplay key={index} data={item}/>
            )
        });

        return (
            <CardContainer>
                {items.length > 0 ? items : 'memuat...'}
            </CardContainer>
        );
    }
}



export default Cardbox;