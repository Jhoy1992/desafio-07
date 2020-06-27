import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, Hover } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  location?: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <div>
          <Link to="/">Listagem</Link>
          {useLocation().pathname === '/' && <Hover />}
        </div>

        <div>
          <Link to="/import">Importar</Link>
          {useLocation().pathname === '/import' && <Hover />}
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
