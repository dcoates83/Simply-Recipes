import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
const Image = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpeg"></StaticImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Image
