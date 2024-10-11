import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/image-stand-out.jpg"
import Lefts from '../../components/static/Left'

const SecondComp = () => {
  return (
    <Container id='second'>
        <Right>
        <Image src={pics} alt='Image' />
      </Right>

      <Lefts smallText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque non modi magnam nemo distinctio, porro repudiandae! Lorem ipsum dolor sit amet." Big="Stand Out to the right Audience" />

      {/* <Left>
        <MainLeft>
          <BigText>Stand Out to the right Audience</BigText>
          <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque non modi magnam nemo distinctio, porro repudiandae! Lorem ipsum dolor sit amet.</SmallText>
          <LearnMore>Learn More</LearnMore>
        </MainLeft>
      </Left> */}
    </Container>
  )
}

export default SecondComp


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

// const LearnMore = styled.div`
// text-transform: uppercase;
// font-weight: 700;
// text-decoration: underline;
// text-decoration-color: yellow;
// text-decoration-thickness: 2px;
// `

// const SmallText = styled.div`
// margin: 20px 0px;
// font-weight: 500;
// `
// const BigText = styled.div`
// font-size: 40px;
// font-weight: 800;
// `
// const MainLeft = styled.div`
// width: 60%;
// `

// const Left = styled.div`
//  width : 50% ;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  height: 100%;
//  /* background-color: green; */
// `

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
`