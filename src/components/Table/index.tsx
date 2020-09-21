import * as React from 'react';
import * as S from './Table.styled';

const Table = () => (
    <S.StyledTable>
        <S.Row>
            <S.TableHeader>Year</S.TableHeader>
            <S.TableData>2021</S.TableData>
            <S.TableData>2022</S.TableData>
            <S.TableData>2023</S.TableData>
            <S.TableData>2024</S.TableData>
        </S.Row>
        <S.Row>
            <S.TableHeader>Cash Flow (Projected)</S.TableHeader>
            <S.TableData>2021</S.TableData>
            <S.TableData>2022</S.TableData>
            <S.TableData>2023</S.TableData>
            <S.TableData>2024</S.TableData>
        </S.Row>
        <S.Row>
            <S.TableHeader>Discount factor</S.TableHeader>
            <S.TableData>2021</S.TableData>
            <S.TableData>2022</S.TableData>
            <S.TableData>2023</S.TableData>
            <S.TableData>2024</S.TableData>
        </S.Row>
        <S.Row>
            <S.TableHeader>Discounted value</S.TableHeader>
            <S.TableData>2021</S.TableData>
            <S.TableData>2022</S.TableData>
            <S.TableData>2023</S.TableData>
            <S.TableData>2024</S.TableData>
        </S.Row>
    </S.StyledTable>
);

export default Table;