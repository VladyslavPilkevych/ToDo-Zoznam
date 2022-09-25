import React, { FC, memo, useState, useEffect } from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ITodo, IInitialState } from '../../types/types';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useActions } from '../../hooks/useActions';

const CustomWrapperContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.creamWhite};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  @media ${(props) => props.theme.media.phone} {
    display: block;
  }
`;

const CustomListItemText = styled(ListItemText)`
  font-size: 16px;
  font-weight: 400;
`;
const checkedListItemTextStyle = {
  textDecoration: 'line-through',
  color: 'grey',
  fontStyle: 'italic',
};
const listItemTextStyle = {
  color: 'black',
};

interface TodoTaskProps {
  value: ITodo;
}

const TodoTask: FC<TodoTaskProps> = ({ value }) => {
  const {
    id,
    title,
    text,
    date: { month, date, year, hour, minute },
    completed,
  } = value;
  const { changeTodoCompleted, deleteTodo, filterTodoList } = useActions();
  const [checked, setChecked] = useState(completed);
  const {
    filters: { searchInputFilter, completedFilter },
  } = useSelector((state: IInitialState) => state.todos);
  useEffect(() => {
    setChecked(completed);
  }, [completed]);
  const updateTaskComplete = async (todoId: number) => {
    if (todoId) {
      changeTodoCompleted(value);
      filterTodoList({
        filterSearchInput: searchInputFilter,
        filterCompleted: completedFilter,
      });
    }
  };
  const deleteTask = async (todoId: number) => {
    deleteTodo(todoId);
    filterTodoList({
      filterSearchInput: searchInputFilter,
      filterCompleted: completedFilter,
    });
  };
  return (
    <CustomWrapperContainer>
      <ListItem
        sx={{
          width: 1 / 1,
        }}
        secondaryAction={
          <IconButton
            sx={{
              marginLeft: 2,
            }}
            edge="end"
            aria-label="comments"
            onClick={() => deleteTask(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          onClick={() => updateTaskComplete(id)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <Container sx={{ display: 'blocks' }}>
            <CustomListItemText
              style={checked ? checkedListItemTextStyle : listItemTextStyle}
            >
              {`Title: ${title}`}
            </CustomListItemText>
            <CustomListItemText
              style={checked ? checkedListItemTextStyle : listItemTextStyle}
            >
              {`Text: ${text}`}
            </CustomListItemText>
          </Container>
          <CustomListItemText
            style={checked ? checkedListItemTextStyle : listItemTextStyle}
          >
            {`month: ${month}, date: ${date}, year: ${year}, hour: ${hour}, minute: ${minute}`}
          </CustomListItemText>
        </ListItemButton>
      </ListItem>
    </CustomWrapperContainer>
  );
};

export default memo(TodoTask);
