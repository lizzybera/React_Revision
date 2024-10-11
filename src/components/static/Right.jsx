import React from 'react'
import styled from 'styled-components'

const Right = ({img}) => {
  return (
    <Rights>
        <Image src={img} alt='Image' />
    </Rights>
  )
}

export default Right

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Rights = styled.div`
width : 50% ;
 height: 100%;
 background-color: yellow;
`