import styled from 'styled-components';

import bg from '../../Assets/images/bg.jpg';

import GothamBook from '../../Assets/fonts/GothamBookRegular.otf';

export const Main2 = styled.main`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 45vh;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: normal;
  color: #393c41;
`

export const Subtitle = styled.h2`
  margin: 0;
  font-family: ${GothamBook}, Helvetica, Arial;
  color: #393c41;
`