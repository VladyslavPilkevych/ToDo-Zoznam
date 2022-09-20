import React, { FC, memo, useState, useEffect } from 'react';

import TodoTask from '../TodoTask/TodoTask';
import { useDispatch, useSelector } from 'react-redux';
import { ITodosState, ITodo } from '../../types/types';
import styles from './TodoContainer.module.scss';

const TodoContainer: FC = () => {
  //   const dispatch = useDispatch();
  const allTodos: ITodo[] = useSelector(
    (state: ITodosState) => state.todos.allTodos
  );
  //   useEffect(() => {
  //     if (allTodos && allTodos.length > 0) {
  // ? нужен ли мне useEffect, если я и так подписался на обновления через useSelector
  //     }
  //   }, [allTodos]);
  return (
    <div className={styles.wrapper}>
      {allTodos &&
        allTodos?.map((elem) => <TodoTask value={elem} key={elem.id} />)}
    </div>
  );
};

export default memo(TodoContainer);
