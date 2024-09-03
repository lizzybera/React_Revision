import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/image-graphic-design.jpg"

const FirstComponents = () => {
  return (
    <Container>
      <Left>
        <MainLeft>
          <BigText>Transform your Brand</BigText>
          <SmallText>hhh</SmallText>
          <LearnMore>Learn More</LearnMore>
        </MainLeft>
      </Left>
      <Right>
        <Image src={pics} alt='Image' />
      </Right>
    </Container>
  )
}

export default FirstComponents


const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Right = styled.div`
width : 50% ;
 height: 100%;
 background-color: yellow;
`

const LearnMore = styled.div`

`

const SmallText = styled.div`

`
const BigText = styled.div`
font-size: 25px;
font-weight: 700;
`
const MainLeft = styled.div`

`

const Left = styled.div`
 width : 50% ;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100%;
 background-color: green;
`

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`