import React from 'react'
import styled from 'styled-components'

const Box = ({text, bg}) => {
  return (
    <Container>
        
           <Card bg={bg}>
                  {text}      
            </Card>
       
    </Container>
  )
}

export default Box

const Card = styled.div`
width: 200px;
height: 200px;
display: flex;
background-color: ${({bg}) => (bg)}; // 1st props
justify-content: center;
align-items: center;
margin: 20px;
`

const Container = styled.div`
    display: flex;
    /* height: 100vh; */
    background-color: silver;
`