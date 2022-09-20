import React from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';

function App() {
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
