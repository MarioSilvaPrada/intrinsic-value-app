import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import * as S from "./Layout.styled";
import Header from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header />

        <S.Body>{children}</S.Body>
      </S.Container>
    </ThemeProvider>
  );
};

export default Layout;
