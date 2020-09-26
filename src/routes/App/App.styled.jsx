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
  border-radius: 5px;
  padding: 1.5rem;
  background: #56556e;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export const RowInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Tip = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 2px solid transparent;
  width: 100%;
  &:focus {
    border: 2px solid ${({ theme }) => theme.dark.background};
  }
`;

export const Label = styled.p`
  margin-right: 1rem;
  min-width: 10rem;
  display: flex;
  align-items: center;

  p {
    margin-right: 0.3rem;
  }
`;

export const CalculateBtn = styled.button`
  border: none;
  background: ${({ theme }) => theme.dark.heading};
  color: ${({ theme }) => theme.dark.background};
  border-radius: 5px;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 2rem;
  transition: 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.dark.error};
  margin-top: 3px;
  font-size: 0.9rem;
  opacity: ${({ showError }) => (showError ? 1 : 0)};
  transition: 0.4s;
`;
