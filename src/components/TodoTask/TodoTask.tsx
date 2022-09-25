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
import styles from './TodoTask.module.scss';
import { useActions } from '../../hooks/useActions';

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
    <div className={styles.todoTaskContainer}>
      <ListItem
        sx={{
          width: 1 / 1,
        }}
        secondaryAction={
          <>
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
          </>
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
          <Container sx={{display: 'blocks'}}>
            <ListItemText
              className={`${styles.taskText} ${
                completed && styles.taskTextChecked
              }`}
              primary={`Title: ${title}`}
            />
            <ListItemText
              className={`${styles.taskText} ${
                completed && styles.taskTextChecked
              }`}
              primary={`Text: ${text}`}
            />
          </Container>
          <ListItemText
            className={`${styles.taskText} ${
              completed && styles.taskTextChecked
            }`}
            primary={`month: ${month}, date: ${date}, year: ${year}, hour: ${hour}, minute: ${minute}`}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default memo(TodoTask);
