import styled from 'styled-components'

// export const LogoImage = styled.img`
//   position: absolute;
//   top: 50px;
//   left: 50px;
// `

// export const LogoText = styled.img`
//   position: absolute;
//   top: 80px;
//   right: 70px;
// `

export const ContactLink = styled.a`
  position: absolute;
  bottom: 100px;
  left: 40px;
  transform: rotate(-90deg);
  color: white;
`

export const InsightsLink = styled.a`
  position: absolute;
  bottom: 100px;
  right: 40px;
  transform: rotate(90deg);
  color: white;
`

export const TopMenuButton = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  right: 50px;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`
