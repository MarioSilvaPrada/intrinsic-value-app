
import styled from 'styled-components';

export const StyledTable = styled.table`
color: white;
border: 1px solid white;
border-collapse: collapse;
`;

export const Row = styled.tr`

`;

export const TableHeader = styled.th`
padding: 1rem;
border: 1px solid white;
text-align: start;
color: ${({ theme }) => theme.dark.heading}
`;

export const TableData = styled.td`
padding: 1rem;
border: 1px solid white;
`;