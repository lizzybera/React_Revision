import React from "react"
// import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import {Link} from "react-scroll"

const Header = () =>{
    const [toggle, setToggle] = useState()
    const [change, setChange] = useState(false)

    
    const onToggled = () =>{
        setToggle(!toggle)
    }

    console.log(toggle, "toggle");
    
    // event listener
    const changeHeader = () =>{
    if(window.scrollY >= 100){
        setChange(false)
    }else{
        setChange(true)
    }

    }

    
window.addEventListener("scroll", changeHeader)

    return (
        <>
            {
                change ? (
                    <Container bg="#5DC0FE" c="white">
            <Main>
                <Logo 
                onClick={()=>{
                    onToggled()
                }}
                >SunnySide</Logo>
                <Navs>
                    <Nav to="hero" navCol="white" smooth duration={1000} >About</Nav>
                    <Nav to="second" navCol="white" smooth duration={1000}>Services</Nav>
                    <Nav to="footer" navCol="white" smooth duration={1000}>Product</Nav>
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
                ) : (
                    <Container bg="white" c="black">
            <Main>
                <Logo 
                onClick={()=>{
                    onToggled()
                }}
                >SunnySide</Logo>
                <Navs>
                    <Nav to="hero" navCol="black" smooth duration={1000} >About</Nav>
                    <Nav to="second" navCol="black" smooth duration={1000}>Services</Nav>
                    <Nav to="footer" navCol="black"  smooth duration={1000}>Product</Nav>
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
        </>
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
    color: ${({navCol}) => (navCol)};
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
background-color: ${({bg}) => (bg)};
display: flex;
justify-content: center;
align-items: center;
position : fixed;
z-index: 10;
color: ${({c}) => (c)};
`