import styled from 'styled-components';

export const Container = styled.div`
   background: ${({ theme }) => theme.dark.background};
   color: ${({ theme }) => theme.dark.heading};
   min-height: 100vh;
`

export const Body = styled.div`
   padding: 1rem 2rem;
`
