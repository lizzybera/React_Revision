import React, { useState } from 'react'
import styled from 'styled-components'

const ObjectAsArray = () => {
    const [initial] = useState([
        {title : "title 1", bg : "red"},
        {title : "title 2",  bg : "yellow"},
        {title : "title 3",  bg : "pink"},
        {title : "title 4",  bg : "blue"},
        {title : "title 5", bg : "purple"},
    ])

  return (
    <Container>
        {
            initial.map( (el) => {
              return  <Box bg={el.bg}>
                        {el.title}
            </Box>
            })
        }
    </Container>
  )
}

export default ObjectAsArray

const Box = styled.div`
width: 200px;
height: 200px;
display: flex;
background-color: ${({bg}) => bg};
justify-content: center;
align-items: center;
margin: 20px;
`

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: silver;
`