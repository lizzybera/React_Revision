import React from 'react'
import styled from 'styled-components'


const Lefts = ({smallText, Big}) => {
  return (
    <Left>
        <MainLeft>
          <BigText>{Big}</BigText>
          <SmallText>{smallText}</SmallText>
          <LearnMore>Learn More</LearnMore>
        </MainLeft>
      </Left>
  )
}

export default Lefts

const LearnMore = styled.div`
text-transform: uppercase;
font-weight: 700;
text-decoration: underline;
text-decoration-color: yellow;
text-decoration-thickness: 2px;
`

const SmallText = styled.div`
margin: 20px 0px;
font-weight: 500;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 800;
`
const MainLeft = styled.div`
width: 60%;
`

const Left = styled.div`
 width : 50% ;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100%;
 /* background-color: green; */
`