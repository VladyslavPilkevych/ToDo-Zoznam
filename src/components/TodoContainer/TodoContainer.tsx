import React, { FC, memo, useState, useEffect } from 'react';

import TodoTask from '../TodoTask/TodoTask';
import { useDispatch, useSelector } from 'react-redux';
import { IInitialState, ITodo } from '../../types/types';
import styles from './TodoContainer.module.scss';

const TodoContainer: FC = () => {
  const [todoListByFilters, setTodoListByFilters] = useState<ITodo[]>([]);
  const {
    allTodos,
    filteredTodoList,
    filters: { searchInputFilter, completedFilter },
  } = useSelector((state: IInitialState) => state.todos);
  useEffect(() => {
    setTodoListByFilters(allTodos);
    if (searchInputFilter.length > 0 || typeof completedFilter === 'boolean') {
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
