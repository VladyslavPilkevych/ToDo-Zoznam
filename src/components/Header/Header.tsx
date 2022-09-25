import React, { FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';
import styled from 'styled-components';

const PageHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.swampGreen};
  display: flex;
  border-radius: 0 0 25px 25px;
`;

const Image = styled.img`
  max-height: 80px;
  flex-basis: 10%;
`;

const CustomContainer = styled.div`
  flex-basis: 47%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  margin-top: 30px;
`;

const CustomNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: none;
  cursor: 'pointer',
  'text-decoration': 'none',
  :hover {
    color: ${(props) => props.theme.colors.hoverDarkBlue};
  }
`;

const navLinkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
};
const activeNavLinkStyle = {
  fontStyle: 'italic',
  cursor: 'default',
  opacity: '0.4',
};

const Header: FC = () => {
  const location = useLocation();
  return (
    <PageHeader>
      <NavLink to="/">
        <Image alt="logo" src={imgLogo} />
      </NavLink>
      <CustomContainer>
        <CustomNavLink
          style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
          to="/"
        >
          HomePage
        </CustomNavLink>
        <CustomNavLink
          style={
            location.pathname === '/todos' ? activeNavLinkStyle : navLinkStyle
          }
          to="/todos"
        >
          Todos
        </CustomNavLink>
      </CustomContainer>
    </PageHeader>
  );
};

export default memo(Header);
