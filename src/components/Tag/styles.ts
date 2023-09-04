import colors from 'components/Theme/colors'
import styled from 'styled-components'

interface IProps {
  disabled?: boolean
}

export const Box = styled.div<IProps>`
  border-radius: 4px;
  background-color: ${({disabled})=> disabled ? colors.disabled : colors.active};
  color: ${({disabled})=> disabled ? colors.gray : colors.white};
  padding: 3px 6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  transition: all .3s ease-in-out;
  position: relative;

  ${({ disabled }) => disabled ? `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -9px;
      border-top: 12px solid transparent;
      border-bottom: 11px solid transparent;
      border-left: 11px solid ${colors.disabled};
      /* clip-path: polygon(15% 0, 15% 100%, 90% 50%); */
      clip-path: circle(55% at -6% 50%);
    }
  ` : `
    &:hover{
      background-color: ${colors.activeHover};
    }
  `}


`