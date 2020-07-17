import styled from '@emotion/styled';
import React from "react"
import icon from './icon-48.png';

const StyledLogo = styled.div`
  width: 220px;
  height: 48px;
  background-size: contain;
  background: url(${icon}) left no-repeat;
  padding-left: 52px;
`;

const StyledText = styled.p`
  color: black;
  line-height: 48px;
  font-size: 120%;
  text-align: center;
`;


const Logo = () => <StyledLogo><StyledText>Polyglot code tools</StyledText></StyledLogo>;

export default Logo;