import { ITodo } from "types";
import { $api } from "./api";

export default class TodoService {
  //получаем все todo
  static async getAllTodo(params?: { page: number, limit: number }): Promise<ITodo[]> {
    const query = params ? `?_page=${params.page}&_limit=${params.limit}` : ''
    const { data } = await $api.get(`/todos${query}`)
    return data
  }
}