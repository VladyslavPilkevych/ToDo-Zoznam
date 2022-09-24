import React, { FC, memo, useState, useEffect } from 'react';

import TodoTask from '../TodoTask/TodoTask';
import { useDispatch, useSelector } from 'react-redux';
import { IInitialState, ITodo } from '../../types/types';
import styles from './TodoContainer.module.scss';

const TodoContainer: FC = () => {
  //   const dispatch = useDispatch();
  const [todoListByFilters, setTodoListByFilters] = useState<ITodo[]>([]);
  // const allTodos: ITodo[] = useSelector(
  //   (state: ITodosState) => state.todos.allTodos
  // );
  // const filteredTodoList: ITodo[] = useSelector(
  //   (state: ITodosState) => state.todos.filteredTodoList
  // );
  // const { searchInputFilter, completedFilter } = useSelector(
  //   (state: IFilterState) => state.todos.filters
  // );
  const {
    allTodos,
    filteredTodoList,
    filters: { searchInputFilter, completedFilter },
  } = useSelector((state: IInitialState) => state.todos);
  useEffect(() => {
    setTodoListByFilters(allTodos);
    // console.log(searchInputFilter);
    // console.log(filteredTodoList);
    if (
      searchInputFilter &&
      searchInputFilter.split(' ').join('').length > 0 &&
      filteredTodoList
    ) {
      setTodoListByFilters(filteredTodoList);
    } else if (completedFilter && typeof completedFilter === 'number') {
      setTodoListByFilters(filteredTodoList);
    }
  }, [allTodos, filteredTodoList, searchInputFilter, completedFilter]);
  return (
    <div className={styles.wrapper}>
      {todoListByFilters &&
        todoListByFilters.length > 0 &&
        todoListByFilters?.map((elem) => (
          <TodoTask value={elem} key={elem.id} />
        ))}
      {todoListByFilters && todoListByFilters.length === 0 && <p>No Items</p>}
    </div>
  );
};

export default memo(TodoContainer);
