import React, {FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

const Header: FC = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <img className={styles.imgLogo} alt="logo" src={imgLogo} />
      </NavLink>
      <div  className={styles.pageLinks}>
        <NavLink className={() => (location.pathname === '/' ? styles.activeNavLink : styles.navLinks)} to="/">HomePage</NavLink>
        <NavLink className={() => (location.pathname === '/todos' ? styles.activeNavLink : styles.navLinks)} to="/todos">Todos</NavLink>
      </div>
    </header>
  );
}

export default memo(Header);
