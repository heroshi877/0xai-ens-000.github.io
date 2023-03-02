import React from 'react'
import styled from '@emotion/styled/macro'
import { Link } from 'react-router-dom'
import mq from 'mediaQuery'

import ENSLogo from '../assets/ensIconLogo.png'
import LogoTyped from '../assets/TypeLogo'

const IconLogo = styled('img')`
  width: 30px;
  ${mq.medium`
    width: 88px
  `}
`

const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
  background: black;
  width: auto;
  

  ${mq.medium`
    width: 200px;
  `}
`

const Logo = ({ color, className, to = '' }) => (
  <LogoContainer className={className} to={to}>
    <IconLogo src={ENSLogo} />
    <LogoTyped color={color} />
  </LogoContainer>
)

export default Logo
