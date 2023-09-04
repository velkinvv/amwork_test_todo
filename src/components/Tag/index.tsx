import {FC, ReactNode} from 'react'

import { Box } from './styles'

interface IProps {
  disabled?: boolean
  children?: ReactNode
}

const Tag: FC<IProps> = ({children, disabled}) => {
  return (
    <>
      <Box disabled={disabled}>
        {children}
      </Box>
      {/* 'Этот код оставлен, чтобы показать что стрелку можно сделать через svg но решил реализовать по другому, хотя через svg проще' */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
        <path d="M0 0H2.0775C3.29264 0 4.44189 0.552359 5.20098 1.50122L10.001 7.50122C11.1697 8.96209 11.1697 11.0379 10.001 12.4988L5.20098 18.4988C4.44189 19.4476 3.29264 20 2.0775 20H0V0Z" fill="#EBEEF6"/>
      </svg> */}
    </>
  )
}

export default Tag