import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    background: #56556e;
    border-bottom: 1px solid white;
    height: 3rem;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
`;

export const Wrapper = styled.div`
display: flex;
`

export const StyledLink = styled(NavLink)`
    margin-left: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 3px solid transparent;

`;

export const MainLink = styled(StyledLink)`
    margin-left: 0;
    margin-right: 2rem;
`

