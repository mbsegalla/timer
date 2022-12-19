import React from 'react';
import { Scroll, Timer } from 'phosphor-react'
import logo from '../../assets/logo.svg';

import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;