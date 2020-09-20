import * as React from 'react';
import theme from '../../theme/theme'
import * as S from './NavBar.styled';

const NavBar = () => {
  const activeLink = {
    borderBottom: `3px solid ${theme.dark.heading}`,

  };
  return (
    <S.Container>
      <S.MainLink activeStyle={activeLink} exact to="/">Home</S.MainLink>
      <S.Wrapper>
        <S.StyledLink activeStyle={activeLink} to="/login">Login</S.StyledLink>
        <S.StyledLink activeStyle={activeLink} to="/sign-up">Sign Up</S.StyledLink>
      </S.Wrapper>
    </S.Container>
  )
};

export default NavBar;
