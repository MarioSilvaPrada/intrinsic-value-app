import React from 'react';

import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.StyledLink to="/">Home</S.StyledLink>
    <div>
      <S.StyledLink left to="/login">Login</S.StyledLink>
      <S.StyledLink left to="/sign-up">Sign Up</S.StyledLink>
    </div>
  </S.Container>
);

export default NavBar;
