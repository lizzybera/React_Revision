import React, { useState } from 'react'
import styled from 'styled-components'

const Counter = () => {
    const [toggle, setToggle] = useState(0)

    const add = () =>{
        setToggle(()=>
        toggle + 1
        )
    }

    const sub = () =>{
        setToggle(() =>
            toggle - 1
        )
    }

    console.log(toggle, "change");
    

  return (
    <Container>
        <Main>
            <Display>{toggle}</Display>
            <Holder>
                <Btn onClick={add}>+</Btn>
                <Btn onClick={sub}>-</Btn>
            </Holder>
        </Main>
    </Container>
  )
}

export default Counter

const Btn = styled.div`
width: 70px;
height: 40px;
background-color: silver;
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
font-weight: 700;

&:hover{
cursor: pointer;
/* border: 1px solid black; */
background-color: #caca13;
transition: all 300ms ease-in-out;
}
`

const Holder = styled.div`
display: flex;
margin-top: 30px;
height: 80px;
/* align-items: ; */
justify-content: center;
`

const Display = styled.div`
width: 90%;
height: 350px;
background-color: yellow;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 700;
`

const Main = styled.div`
width: 400px;
height: 500px;
background-color: white;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #cbc8c8;
display: flex;
align-items: center;
justify-content: center;
`