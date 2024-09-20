import React, { useState } from 'react'
import styled from 'styled-components'
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaLock, FaUnlock  } from "react-icons/fa";
import pics from "../../assets/image-photography.jpg"


const SignIn = () => {
    const [show, setShow] = useState(false)

    const onShow = () =>{
        setShow(!show)
    }

    // console.log(show, "onShow");
    

  return (
    <Container>
        <Circle src={pics}/>
        <Main>
            <Title>Log In</Title>

            <InputHolder>
                {/* <Icon /> */}

                <FaUser size={20} color="black" />
                <Input placeholder='UserName' type='text' />
            </InputHolder>

            {
                show ? 
                (<InputHolder>
                    <FaLock size={20} color="black" cursor="pointer" onClick={onShow} />
                    <Input placeholder='password' type='text' />
                </InputHolder>) 
                : 
                (<InputHolder>
                <FaUnlock size={20} color="black" cursor="pointer" onClick={onShow} />
                <Input placeholder='password' type='password' />
            </InputHolder>)
            }

            <Button>
                logIn
            </Button>

            <Text>
                Dont have an Account? <Span to="/register">Register</Span>
            </Text>
        </Main>
    </Container>
  )
}

export default SignIn

const Circle = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* background-color: yellow; */
    object-fit: cover;
`

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

&:hover{
    cursor: pointer;
}

`

const Input = styled.input`
width: 100%;
background-color: transparent;
margin-left: 5px;
outline: none;
border: none;
height: 70%;

&::placeholder{
    font-size: 30px;
    /* color : blue; */
}

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
    height: 400px;
    background-color: aliceblue;
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction : column;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`