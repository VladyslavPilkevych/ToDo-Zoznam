import React, { FC, memo, useState } from 'react';
// import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { ITodo } from '../../types/types';

import { useDispatch } from 'react-redux';
import { updateTodoList } from '../../store/actionCreators/todosAC';
import styles from './TodoTask.module.scss';

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
  const dispatch = useDispatch();
  //   const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);
  const updateTaskComplete = async (todoId: number) => {
    if (todoId) {
      dispatch(updateTodoList({ id: todoId, action: 'completed' }));
    }
    setChecked((e) => !e);
  };
  const deleteTask = async (todoId: number) => {
    dispatch(updateTodoList({ id: todoId, action: 'delete' }));
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
