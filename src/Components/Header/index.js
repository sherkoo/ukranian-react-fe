import React from 'react';
import { HeaderContainer, HeaderNav } from './header.style';
import { handleShowEng, handleShowUkr, handleShowPro } from '../../Redux/words';
import Pill from '../Pill';

function Header(props) {
  return (
    <HeaderContainer>
      <h1>Ukraine</h1>
      <HeaderNav>
        <Pill label="Eng" click={() => handleShowEng()} />
        <Pill label="Ukr" click={() => handleShowUkr()} />
        <Pill label="Pro" click={() => handleShowPro()} />
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;