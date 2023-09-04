import {FC, useEffect, useState} from 'react'
import { observer } from 'mobx-react-lite'
import store from 'store/todoStore'

import TodoItem from 'components/TodoItem'
import Loading from 'components/Loading'
import Header from 'components/Header'

import { ListContainer } from './styles'


const TodoList: FC = observer(() => {
  const { getTodos, completeTodo, todos, loading } = store
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [firstLoad, setFirstLoad] = useState<boolean>(true)

  useEffect(() => {
    if (firstLoad) {
      getTodos()
      setFirstLoad(false)
    }

    return () => { }
  }, [firstLoad])


  const onChangeHandler = (id: number): void => {
    completeTodo(id)
  }

  const handleScroll = () => {
    // Получаем высоту контента и текущую прокрутку
    if (ref) {
      // Проверяем, достигли ли конца контента
      if (ref?.clientHeight + ref?.scrollTop >= ref?.scrollHeight - 100 && !loading) {
        getTodos()
      }
    }
  };

  if (!todos) {
    return null
  }

  return (
    <ListContainer
      ref={(ref) => setRef(ref)}
      onScroll={handleScroll}
    >
      <Header />
      {todos?.map(todo => (
        <TodoItem
          key={todo?.id}
          todo={todo}
          onChange={onChangeHandler}
        />
      ))}
      {loading && <Loading />}
    </ListContainer>
  )

  //пример реализации через просис
  // return todos?.case({
  //   pending: () => <Loading />,
  //   rejected: () => <div>Error</div>,
  //   fulfilled: (data) =>
  //     <ListContainer>
  //       {data?.map(todo => (
  //         <TodoItem
  //           key={todo?.id}
  //           todo={todo}
  //         />
  //       ))}
  //     </ListContainer>
  // })
})

export default TodoList