import React from 'react';
import Layout from 'components/Layout/index.tsx';

import Table from '../../components/Table/index.tsx';
import * as S from './App.styled';

const App = () => {
  const fieldsInputs = [
    {
      fieldName: 'Stock Name',
      fieldType: 'text',
    },
    {
      fieldName: 'Stock Symbol',
      fieldType: 'text',
    },
    {
      fieldName: 'Operating Cash Flow',
      fieldType: 'number',
    },
    {
      fieldName: 'Total Debt (Short term + Long Term)',
      fieldType: 'number',
    },
    {
      fieldName: 'Cash and Short term investments',
      fieldType: 'number',
    },
    {
      fieldName: 'Cash flow growth rate (Yr 1 - 3)',
      fieldType: 'number',
    },
    {
      fieldName: 'Cash flow growth rate (Yr 4 - 10)',
      fieldType: 'number',
    },
    {
      fieldName: 'No of shares Outstanding',
      fieldType: 'number',
    },
    {
      fieldName: 'Discount Rate',
      fieldType: 'number',
    },
  ];

  return (
    <Layout>
      <S.Title>Home</S.Title>
      <S.InputWrapper>
        {fieldsInputs.map(({ fieldName, fieldType }) => (
          <S.RowInput>
            <S.Label>{fieldName}</S.Label>
            <S.StyledInput type={fieldType} />
          </S.RowInput>
        ))}
      </S.InputWrapper>
      <Table />
    </Layout>
  );
};

export default App;
