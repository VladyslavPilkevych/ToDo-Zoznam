import React, { FC, memo, useState, useEffect } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { IInitialState, ITodo } from '../../types/types';
import styled from 'styled-components';

const CustomTodosContainer = styled(Container)`
  width: 80%;
  margin: 20px auto;
  padding-top: 40px;
  @media ${(props) => props.theme.media.phone} {
    width: 95%;
  }
`;
const NoItemsText = styled.p`
  margin: 20px auto;
  font-size: 25px;
  font-weight: 700;
`;

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
    <CustomTodosContainer>
      {todoListByFilters &&
        todoListByFilters.length > 0 &&
        todoListByFilters?.map((elem) => (
          <TodoTask value={elem} key={elem.id} />
        ))}
      {todoListByFilters && todoListByFilters.length === 0 && <NoItemsText>No Items</NoItemsText>}
    </CustomTodosContainer>
  );
};

export default memo(TodoContainer);
