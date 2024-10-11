import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/image-transform.jpg"
import Lefts from '../../components/static/Left'
import Right from '../../components/static/Right'

const FirstComponents = () => {
  return (
    <Container>
      
    <Lefts Big="Transform your Brand" smallText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque non modi magnam nemo distinctio, porro repudiandae! Lorem ipsum dolor sit amet." />

    <Right img={pics} />

      
    </Container>
  )
}

export default FirstComponents



const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
`