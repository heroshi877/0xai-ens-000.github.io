import styled from '@emotion/styled/macro'
import { ReactComponent as Upload } from '../Icons/Upload.svg'

const StyledUpload = styled(Upload)`
  ${p =>
    p.disabled &&
    `
     g {
       fill: #fdbc03;
     }
  `}
  &:hover {
    g {
      transition: 0.2s;
      fill: #f3ba2f;
    }
    cursor: pointer;
  }

  ${p =>
    p.disabled &&
    `
    &:hover {
      cursor: default;
      g {
        fill: #fdbc03;
      }
    }
  `}
`

export default StyledUpload
