import React, { useEffect } from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { getAllTodos } from './store/actionCreators/todosAC';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
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
