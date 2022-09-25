import React, { useEffect } from 'react';
import AppRoutes from './Routes/Routes';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import { useActions } from './hooks/useActions';

function App() {
  const {
    getAllTodos,
    filterTodoList,
    liveSearchInputFilter,
    changeFilterCompleteTodos,
  } = useActions();
  const location = useLocation();
  useEffect(() => {
    getAllTodos();
  }, []);
  useEffect(() => {
    filterTodoList({
      filterSearchInput: '',
      filterCompleted: null,
    });
    liveSearchInputFilter('');
    changeFilterCompleteTodos(null);
  }, [location.pathname]);
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: '85px' }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
