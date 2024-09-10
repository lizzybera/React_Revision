import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/image-header.jpg"

export const Hero = () => {
  return (
    <Container>
        <Text>We are creative</Text>
        <Image src={pics} />
    </Container>
  )
}
// export const Hero2 = () => {
//   return (
//     <Container>
//         <Text>We are creative</Text>
//         <Image src={pics} />
//     </Container>
//   )
// }
// export const Hero3 = () => {
//   return (
//     <Container>
//         <Text>We are creative</Text>
//         <Image src={pics} />
//     </Container>
//   )
// }

export default Hero



const Image = styled.img`
width: 100%;
height: 400px;
object-fit: contain;
`

const Text = styled.div`
font-size: 45px;
font-weight: 800;
`
const Container = styled.div`
background-color: #5DC0FE;
width: 100%;
/* height: 500px; */
color: white;
display:  flex;
flex-direction: column;
align-items: center;
`
