import React from "react"
import styled from "styled-components"
import {FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { BsTwitter, BsPinterest  } from "react-icons/bs"

const Footer = () =>{
    return (
        <Container>
           <Logo>sunnyside</Logo>

           <Navs>
                <SubNavs>About</SubNavs>
                <SubNavs>Services</SubNavs>
                <SubNavs>Projects</SubNavs>
            </Navs> 

            <Icons>
                <FaFacebookSquare size={20} />
                <FaInstagram size={20} />
                <BsTwitter size={20} />
                <BsPinterest size={20} />
            </Icons>
        </Container>
    )
}

export default Footer

const Icons = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
`

const SubNavs = styled.div``

const Navs = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
font-weight: 500;
margin-top: 25px;
margin-bottom: 50px;
`

const Logo = styled.div`
font-weight: 700;
font-size: 25px;
`

const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color: #1fe1d7;
    color: #13736e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`