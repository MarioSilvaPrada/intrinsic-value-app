import * as React from 'react';

import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.MainLink to="/">Home</S.MainLink>
    <div>
      <S.StyledLink to="/login">Login</S.StyledLink>
      <S.StyledLink to="/sign-up">Sign Up</S.StyledLink>
    </div>
  </S.Container>
);

export default NavBar;
