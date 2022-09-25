import React, { FC, memo, useState, useEffect } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { IInitialState, ITodo } from '../../types/types';

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
    <Container sx={{ width: '80%', margin: '20px auto', paddingTop: '40px' }}>
      {todoListByFilters &&
        todoListByFilters.length > 0 &&
        todoListByFilters?.map((elem) => (
          <TodoTask value={elem} key={elem.id} />
        ))}
      {todoListByFilters && todoListByFilters.length === 0 && <p>No Items</p>}
    </Container>
  );
};

export default memo(TodoContainer);
