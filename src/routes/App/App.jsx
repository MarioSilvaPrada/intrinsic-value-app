import React from 'react';
import Layout from 'components/Layout/index.tsx';

import * as S from './App.styled';

const App = () => (
  <Layout>
    <h1>Home</h1>
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
  </Layout>
);

export default App;
