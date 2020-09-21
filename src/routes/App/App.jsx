import React, { useState } from 'react';
import Layout from 'components/Layout/index.tsx';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Table from '../../components/Table/index.tsx';
import * as S from './App.styled';

const App = () => {
  const [discountRate, setDiscountRate] = useState(0);
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
      tip: true,
    },
    {
      fieldName: 'Total Debt (Short term + Long Term)',
      fieldType: 'number',
      tip: true,
    },
    {
      fieldName: 'Cash and Short term investments',
      fieldType: 'number',
      tip: true,
    },
    {
      fieldName: 'Cash flow growth rate (Yr 1 - 3)',
      fieldType: 'number',
      tip: true,
    },
    {
      fieldName: 'Cash flow growth rate (Yr 4 - 10)',
      fieldType: 'number',
      tip: true,
    },
    {
      fieldName: 'No of shares Outstanding',
      fieldType: 'number',
      tip: true,
    },
    {
      fieldName: 'Discount Rate',
      fieldType: 'number',
      value: discountRate,
      setValue: (e) => setDiscountRate(e.target.value),
      tip: true,
    },
  ];

  return (
    <Layout>
      <S.Title>Home</S.Title>
      <S.InputWrapper>
        {fieldsInputs.map(({
          fieldName, fieldType, value, setValue, tip,
        }) => (
          <S.RowInput key={fieldName}>
            <S.Label>
              <p>{fieldName}</p>
              {tip && (
              <S.Tip>
                <BsQuestionCircleFill />
              </S.Tip>
              )}
            </S.Label>
            <S.StyledInput
              type={fieldType}
              value={value}
              onChange={setValue}
            />
          </S.RowInput>
        ))}
      </S.InputWrapper>
      <Table />
    </Layout>
  );
};

export default App;
