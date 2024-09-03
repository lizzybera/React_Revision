import React from "react"
import styled from "styled-components"

const Header = () =>{
    return (
        <Container>
            <Main>
                <Logo>SunnySide</Logo>
                <Navs>
                    <Nav>About</Nav>
                    <Nav>Services</Nav>
                    <Nav>Product</Nav>

                    <Button>Contact</Button>
                </Navs>
            </Main>
        </Container>
    )
}

export default Header

const Button = styled.div`
    padding: 12px 22px;
    background-color: white;
    color: black;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    /* :hover  {
        cursor: pointer;
    } */
`

const Nav = styled.div`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
`

const Navs = styled.div`
    width: 37%;
    /* background-color: blue; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
font-size: 24px;
font-weight: 800;
`

const Main = styled.div`
width:  90%;
height: 100%;
/* background-color: black; */
display: flex;
justify-content: space-between;
align-items: center;
`  

const Container = styled.div`
height: 85px;
width: 100%;
background-color: #5DC0FE;
display: flex;
justify-content: center;
align-items: center;
color: white;
`