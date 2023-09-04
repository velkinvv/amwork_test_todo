import colors from 'components/Theme/colors';
import styled from 'styled-components'

export const TodoCard = styled.div`
  background-color: ${colors.white};
  border-radius: 7px;
  display: flex;
  width: 255px;
  height: 158px;
  min-height: 158px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  box-shadow: 0px 1px 2px 0px #D0DAEB, 0px 0px 2px 0px #EEF4FE;
  overflow: hidden;
`
interface ICardTitleProps {
  disabled?: boolean;
}

export const CardTitle = styled.div<ICardTitleProps>`
  color:  ${({disabled})=> disabled ? colors.gray : colors.primary};
  text-overflow: ellipsis;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: left;
  width: 100%;
  height: 55px;
  transition: all .3s ease-in-out;
  text-decoration: ${({disabled})=> disabled ? 'line-through' : 'none'};
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 19px;
`

export const DateEl = styled.div`
  color: ${colors.green};
  /* font-family: 'Segoe UI'; */
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`

export const Description = styled.div`
  overflow: hidden;
  width: 100%;
  height: 20px;
  color: ${colors.gray};
  text-overflow: ellipsis;
  white-space: nowrap;
  /* font-family: 'Segoe UI'; */
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

export const BottomLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`
