import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"

const Header = () =>{
    const [toggle, setToggle] = useState()

    const onToggled = () =>{
        setToggle(!toggle)
        // console.log(toggle, "toggle")
    }

    console.log(toggle, "toggle");
    
// if (condition) {
    
// } else {
    
// }

    return (
        <Container>
            <Main>
                <Logo 
                onClick={()=>{
                    onToggled()
                }}
                >SunnySide</Logo>
                <Navs>
                    <Nav to="/about" >About</Nav>
                    <Nav to="/">Services</Nav>
                    <Nav to="/">Product</Nav>
                    {/* <Link to="/about"> Second About</Link> */}

                    {/* condition ? true : false */}

                    <Button to="/sign-in">
                        Log In
                    </Button>
                    {/* <Button>
                        {
                           toggle ? ("Contact") : ("Click")
                        }
                    </Button> */}
                </Navs>
            </Main>
        </Container>
    )
}

export default Header

const Button = styled(Link)`
    padding: 12px 22px;
    background-color: white;
    color: black;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;

    /* :hover  {
        cursor: pointer;
        color: yellow;
    } */
`

const Nav = styled(Link)`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    color: white;
    text-decoration: none;
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