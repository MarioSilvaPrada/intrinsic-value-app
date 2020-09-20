import styled from 'styled-components';

export const Container = styled.div`
${({ theme }: any) => console.log(theme)}
   background: ${({ theme }: string) => theme.dark.background}
`
