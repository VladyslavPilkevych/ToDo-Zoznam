export interface IDate {
  month: number;
  date: number;
  year: number;
  hour: number;
  minute: number;
}

export interface INewTaskSchemaTS {
  title: string;
  text: string;
  date: Date;
}

export interface ITodo {
  id: number;
  title: string;
  text: string;
  date: IDate;
  completed: boolean;
}

export interface ITodosState {
  todos: {
    allTodos: ITodo[];
    filteredTodoList: ITodo[];
  }
}
export interface IFilterState {
  todos: {
    filters: {
      searchInputFilter: string;
      completedFilter: boolean;
    }
  }
}