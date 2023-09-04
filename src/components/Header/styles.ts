import styled from 'styled-components'
import colors from 'components/Theme/colors'


export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #f6f5f5;
  z-index: 99;
  padding: 10px;
`

export const HeaderTitle = styled.div`
  color: ${colors.green};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`

//для кнопки не стал создавать отдельный компонент, т.к. она не функциональная

export const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${colors.disabled};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray};
  }
`

export const Page = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #7B8AAB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray}
`