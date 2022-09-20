import React, {FC, memo, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

const Header: FC = () => {
  //   const navigate = useNavigate();

  //   const [value, setValue] = useState('');

  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <img className={styles.imgLogo} alt="logo" src={imgLogo} />
      </NavLink>
      <div  className={styles.pageLinks}>
        <NavLink className={styles.navLinks} to="/">HomePage</NavLink>
        <NavLink className={styles.navLinks} to="/todos">Todos</NavLink>
      </div>
    </header>
  );
}

export default memo(Header);
