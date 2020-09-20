import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    background: #ccc;
`;

export const StyledLink = styled(Link)`
    margin-left: 2rem;
`;

export const MainLink = styled(StyledLink)`
    margin-left: 0;
    margin-right: 2rem;
`

