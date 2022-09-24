import React, { useEffect } from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';
import { useActions } from './hooks/useActions';
import './App.scss';

function App() {
  const {getAllTodos} = useActions();
  useEffect(() => {
    getAllTodos();
    // dispatch(getAllTodos());
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
