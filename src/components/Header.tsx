/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import StyledHeader from './styled/StyledHeader';
import Logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <StyledHeader className="header">
      <div className="header__wrapper">
        <img src={ Logo } alt="logo" className="header__logo" />
        <nav className="header__links">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="header__social-media">
          <a href="https://github.com/oguiaugusto" rel="noreferrer" target="_blank">
            <BsGithub size={ 20 } />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/oguiaugusto/" rel="noreferrer" target="_blank">
            <BsLinkedin size={ 20 } />
            LinkedIn
          </a>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
