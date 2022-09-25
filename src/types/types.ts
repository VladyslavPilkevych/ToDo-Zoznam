export interface IDate {
  month: number;
  date: number;
  year: number;
  hour: number;
  minute: number;
}

export interface ITodo {
  id: number;
  title: string;
  text: string;
  date: IDate;
  completed: boolean;
}

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

export interface IData {
  filterSearchInput: string;
  filterCompleted: boolean | null;
}

export interface ITheme {
  colors: {
    creamWhite: string;
    light: string;
    pinkLight: string;
    swampGreen: string;
    swampGreen2: string;
    darkBlue: string;
    hoverDarkBlue: string;
  },
  media: {
    phone: string;
    tablet: string;
    notLaptop: string;
  },
}