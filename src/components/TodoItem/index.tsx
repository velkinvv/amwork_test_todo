import { FC } from 'react'
import { Avatar } from '@mui/material';

import CheckBox from 'components/Checkbox'
import Tag from 'components/Tag';

import { BottomLine, CardTitle, DateEl, DateWrapper, Description, TagsWrapper, TodoCard } from './styles'
import { ITag, ITodo } from 'types'

interface IProps {
  todo?: ITodo
  onChange?: (id: number) => void
}

const TodoItem: FC<IProps> = ({ todo, onChange }) => {
  if (!todo) return null

  const onChangeHandler = (): void => {
    onChange && onChange(todo.id)
  }


  return (
    <TodoCard>
      <CardTitle disabled={todo?.completed}>
        <CheckBox
          checked={todo?.completed}
          onChange={onChangeHandler}
          sx={{ padding: 0, marginRight: 1, float: 'left' }}
        />
        {todo?.title?.charAt(0)?.toUpperCase() + todo?.title?.slice(1)}
      </CardTitle>

      <DateWrapper>
        <DateEl>
          {todo?.startDate}
        </DateEl>
        <DateEl>
          {todo?.endDate}
        </DateEl>
      </DateWrapper>

      <Description>
        {todo?.description}
      </Description>

      <BottomLine>
        <TagsWrapper>
          {todo?.tags?.map((tag: ITag) => (
            <Tag key={tag?.id} disabled={tag?.disabled}>
              {tag?.description}
            </Tag>
          ))}
        </TagsWrapper>

        <Avatar
          alt="avatar"
          src="assets/avatar.png"
          sx={{ width: 36, height: 36 }}
        />
      </BottomLine>
    </TodoCard>
  )
}

export default TodoItem