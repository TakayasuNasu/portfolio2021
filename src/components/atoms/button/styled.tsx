import styled from 'styled-components'
import media from 'styled-media-query'
import { vw } from '../../../util/styled-util'

const ButtonStyled = styled.div<{ bg?: String; disabled?: Boolean }>`
  width: ${vw(88)};
  height: ${vw(40)};
  ${media.greaterThan('medium')`
    width: 120px;
    height: 40px;
  `}
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: ${(props: any) => props.bg || '#2ecc71'};
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    ${({ disabled }) =>
      disabled &&
      `
      opacity: 0.5;
      cursor: not-allowed;
    `}
  }
  p.button-text {
    font-size: 20px;
    color: #ecf0f1;
  }
`

export default ButtonStyled
