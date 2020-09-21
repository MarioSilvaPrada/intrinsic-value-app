import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 2.5rem;
`;

export const InputWrapper = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 1.5rem;
`;

export const RowInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Tip = styled.div`
  cursor: pointer;
  font-size: .8rem;
`

export const StyledInput = styled.input`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${({ theme }) => theme.dark.heading};
  }
`;

export const Label = styled.p`
  margin-right: 1rem;
  min-width: 10rem;
  display: flex;
  align-items: center;

  p {
      margin-right: .3rem;
  }
`;
