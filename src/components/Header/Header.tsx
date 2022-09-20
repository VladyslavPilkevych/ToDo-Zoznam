import React, { memo, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
//   const navigate = useNavigate();

//   const [value, setValue] = useState('');

  return (
    <header>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </header>
  );
}

export default memo(Header);
