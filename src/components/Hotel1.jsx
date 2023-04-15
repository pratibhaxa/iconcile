import styled from "styled-components";
import Navigation from "./Navigation";
import Hotels from './hotels.json';
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
`;

const JsonData = styled.div`
    overflow: auto;
    height: 90%;
    width: 100%;
`;

const HotelContainer = styled.table`
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    background: #fde9ea;
    width: 100%;
    border: 1px solid;
    text-align: left;
    /* max-width: 960px; */
`;

const Tr = styled.tr`
    width: 20px;
`;

const Td = styled.td`
    /* border: 1px solid; */
    width: 20px;
`;

const Button = styled.button`
    
`;

function Hotel1() {

    return(
        <Container>
            <Navigation />
            <JsonData>
                ThisisHotel1
            </JsonData>
            
        </Container>
    )
}

export default Hotel1;