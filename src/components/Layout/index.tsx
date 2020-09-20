import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import * as S from './Layout.styled'

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <S.Container>
                <h1>ola</h1>
            </S.Container>
        </ThemeProvider>
    )
}

export default Layout