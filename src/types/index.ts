export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
  startDate: string
  endDate: string
  description: string
  tags: ITag[]
}

export interface ITag {
  id: number
  disabled: boolean
  description: string
}