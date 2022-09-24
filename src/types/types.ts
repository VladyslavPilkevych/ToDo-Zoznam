// I for date in todo
export interface IDate {
  month: number;
  date: number;
  year: number;
  hour: number;
  minute: number;
}

// I for todo
export interface ITodo {
  id: number;
  title: string;
  text: string;
  date: IDate;
  completed: boolean;
}

// I for creator todo inputs
export interface INewTaskSchemaTS {
  title: string;
  text: string;
  date: Date;
}

export interface IInitialState {
  todos: {
    allTodos: ITodo[];
    filteredTodoList: ITodo[];
    filters: {
      searchInputFilter: string;
      completedFilter: boolean | null;
    };
  };
}

// ?
// export interface ITodosState {
//   todos: {
//     allTodos: ITodo[];
//     filteredTodoList: ITodo[];
//   };
// }

// export interface IFilterState {
//   todos: {
//     filters: {
//       searchInputFilter: string;
//       completedFilter: boolean;
//     };
//   };
// }

export interface IData {
  filterSearchInput: string;
  filterCompleted: boolean | null;
}

export interface IUpdateData {
  action: string;
  id: number;
}
