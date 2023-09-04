import {FC} from 'react'
import { Container } from './styles'
import { CircularProgress } from '@mui/material'

const Loading: FC = () => {
  return (
    <Container><CircularProgress /></Container>
  )
}

export default Loading