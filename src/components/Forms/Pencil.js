import styled from '@emotion/styled/macro'
import { ReactComponent as Pencil } from '../Icons/Pencil.svg'

const StyledPencil = styled(Pencil)`
  ${p =>
    p.disabled &&
    `
     g {
       fill: #ffffff;
     }
  `}
  &:hover {
    g {
      transition: 0.2s;
      fill: #ffffff;
    }
    cursor: pointer;
  }

  ${p =>
    p.disabled &&
    `
    &:hover {
      cursor: default;
      g {
        fill: #ffffff;
      }
    }
  `}
`

export default StyledPencil
