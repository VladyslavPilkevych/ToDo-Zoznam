import React, { FC, memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { ITodo, IInitialState } from '../../types/types';

import { useDispatch, useSelector } from 'react-redux';
// import { changeTodoCompleted, deleteTodo, filterTodoList } from '../../store/actionCreators/todosAC';
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
  // const dispatch = useDispatch();
  const { changeTodoCompleted, deleteTodo, filterTodoList } = useActions();
  const [checked, setChecked] = useState(completed);
  const {
    filters: { searchInputFilter, completedFilter },
  } = useSelector((state: IInitialState) => state.todos);
  useEffect(() => {
    setChecked(completed);
  }, [completed]);
  useEffect(() => {
    console.log(id);
  }, [id]);
  const updateTaskComplete = async (todoId: number) => {
    if (todoId) {
      // dispatch(changeTodoCompleted(todoId));
      // changeTodoCompleted(todoId);
      changeTodoCompleted(value);
      // dispatch(
      //   filterTodoList({
      //     filterSearchInput: searchInputFilter,
      //     filterCompleted: completedFilter,
      //   })
      // );
      filterTodoList({
        filterSearchInput: searchInputFilter,
        filterCompleted: completedFilter,
      });
    }
    // setChecked((e) => !e);
  };
  const deleteTask = async (todoId: number) => {
    // dispatch(deleteTodo(todoId));
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
              //   inputProps={{ 'aria-labelledby': id }}
            />
          </ListItemIcon>
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
