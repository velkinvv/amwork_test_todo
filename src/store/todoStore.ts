import { makeAutoObservable, runInAction} from 'mobx'
// import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'
import { ITodo } from '../types'
import TodoService from '../service/todoService'
import { faker } from '@faker-js/faker';
import getRandomDateRange from 'handlers/randomDate';

class Store {
  // пример реализаци через промис
  // todos?: IPromiseBasedObservable<ITodo[]> | undefined;
  todos: ITodo[] = [];
  page:number = 1;
  limit:number = 10;
  loading:boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  getTodos = () => {
    if (this.loading) return null
    this.loading = true;
    TodoService.getAllTodo({page: this.page, limit: this.limit})
      .then(todos => {
        runInAction(() => {
          //заполняем массив данными
          const fullTodos = todos?.map(el => {
            const { startDate, endDate } = getRandomDateRange()
            return {
              ...el,
              tags: [
                {id: 0, disabled: false, description: faker.word.adjective({ length: { min: 3, max: 7 }, strategy: "fail" })},
                {id: 1, disabled: true, description: faker.word.adjective({ length: { min: 3, max: 7 }, strategy: "fail" })}
              ],
              startDate,
              endDate,
              description: faker.lorem.paragraph()
            }
          })

          this.todos = [...this.todos, ...fullTodos];
          this.page++;
          this.loading = false;
        });
      })
      .catch (error => {
        console.error('Error fetching todos:', error);
        runInAction(() => {
          this.loading = false;
        });
      })
  }

  completeTodo = (id: number) => {
    this.todos = this.todos?.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  get total ():string {
    return `Loaded ${this.todos.length}`
  }
  //пример реализаци через промис
  // getTodos = () => {
  //   this.todos = fromPromise(TodoService.getAllTodo())
  // }
}

const store = new Store()

export default store