import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    background: #ccc;
`;

export const StyledLink = styled(Link)`
    ${(props: { left: boolean }) => (props.left ? css`margin-left: 2rem` : css`margin-right: 2rem`)};
`;

