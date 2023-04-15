import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../config/firebase";

const Container = styled.div`
    /* margin-top: 0; */
    /* background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%); */
    background: teal;
`;

const Top = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 50px; */
    color: white;
    /* background-color: green; */
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    margin: 20px;
    margin-left: 200px;
    /* margin-top: 80px; */
    /* cursor: pointer; */
`;

const LeftText = styled.div`
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    /* text-align: center;
    align-items: center; */
    justify-content: flex-end;
    /* margin-top: 80px; */
    
`;

const Text = styled.div`
    margin: 20px;
    margin-left: 60px;
    /* margin-right: 30px; */
    /* background-color: aliceblue; */
    /* cursor: pointer; */
    // when hovered over
    /* &:hover {
        text-decoration: underline;
        text-decoration-color: black;
    } */
`;

function Navigation () {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    return (
        <Container>
            <Top>
                <Left>
                    <LeftText>Hotel Booking & Recommendation</LeftText></Left>
                <Right>
                    <Text>Welcome {user?.email}</Text>
                </Right>
            </Top>
        </Container>
    )
}

export default Navigation;