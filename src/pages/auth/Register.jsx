import React from 'react'
import styled from 'styled-components'
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
        <Main>
            <Title>Register</Title>

            <InputHolder>
                <FaUser size={20} color="black" />
                <Input placeholder='Name' type='text' />
            </InputHolder>

            <InputHolder>
                <FaUser size={20} color="black" />
                <Input placeholder='Email' type='email' />
            </InputHolder>

            <InputHolder>
                {/* <Icon /> */}

                <FaUser size={20} color="black" />
                <Input placeholder='UserName' type='text' />
            </InputHolder>

            <InputHolder>
                <FaUser size={20} color="black" />
                <Input placeholder='password' type='password' />
            </InputHolder>

            <Button>
                logIn
            </Button>

            <Text>
                Dont You have an Account? <Span to="/sign-in">Log In</Span>
            </Text>
        </Main>
    </Container>
  )
}

export default Register

const Span = styled(Link)`
color: blue;
font-weight: 700;
text-decoration: none;
cursor : pointer;
`
const Text = styled.div`
margin: 20px 0px;
color: blue;
`
const Button = styled.div`
width : 100%;
height : 50px;
border-radius: 30px;
background-color: blue;
color: white;
display : flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
font-weight: 700;
font-size: 20px;
cursor: pointer;

`

const Input = styled.input`
width: 100%;
background-color: transparent;
margin-left: 5px;
outline: none;
border: none;
height: 70%;

/* ::placeholder{
    font-size: 30px;
    color : blue;
} */

`


// Another way to input icons
// const Icon = styled(FaUser)`
// color: blue;
// `

const InputHolder = styled.div`
width : 100%;
height : 50px;
border:  3px solid blue;
border-radius: 30px;
display : flex;
align-items: center;
padding: 0px 15px;
margin: 10px 0px;

`

const Title = styled.div`
font-size: 30px;
color: #3a3ae3;
font-weight: 700;
margin-bottom: 30px;
`

const Main = styled.div`
    width: 400px;
    min-height: 400px;
    background-color: aliceblue;
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction : column;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`