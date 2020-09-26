import React, { useState } from 'react';
import Layout from 'components/Layout/index.tsx';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Table from '../../components/Table/index.tsx';
import * as S from './App.styled';

const App = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [cashFlow, setCashFlow] = useState('');
  const [debt, setDebt] = useState('');
  const [cash, setCash] = useState('');
  const [growRate, setGrowRate] = useState('');
  const [longGrowRate, setLongGrowRate] = useState('');
  const [noShares, setNoShares] = useState('');
  const [discountRate, setDiscountRate] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const fieldsInputs = [
    {
      fieldName: 'Stock Name',
      fieldType: 'text',
      value: name,
      setValue: (e) => setName(e.target.value),
    },
    {
      fieldName: 'Stock Symbol',
      fieldType: 'text',
      value: symbol,
      setValue: (e) => setSymbol(e.target.value),
    },
    {
      fieldName: 'Operating Cash Flow',
      fieldType: 'number',
      tip: true,
      value: cashFlow,
      setValue: (e) => setCashFlow(e.target.value),
    },
    {
      fieldName: 'Total Debt (Short term + Long Term)',
      fieldType: 'number',
      tip: true,
      value: debt,
      setValue: (e) => setDebt(e.target.value),
    },
    {
      fieldName: 'Cash and Short term investments',
      fieldType: 'number',
      tip: true,
      value: cash,
      setValue: (e) => setCash(e.target.value),
    },
    {
      fieldName: 'Cash flow growth rate (Yr 1 - 3)',
      fieldType: 'number',
      tip: true,
      value: growRate,
      setValue: (e) => setGrowRate(e.target.value),
    },
    {
      fieldName: 'Cash flow growth rate (Yr 4 - 10)',
      fieldType: 'number',
      tip: true,
      value: longGrowRate,
      setValue: (e) => setLongGrowRate(e.target.value),
    },
    {
      fieldName: 'No of shares Outstanding',
      fieldType: 'number',
      tip: true,
      value: noShares,
      setValue: (e) => setNoShares(e.target.value),
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
            <>
              <S.StyledInput
                type={fieldType}
                value={value}
                onChange={setValue}
              />
              <S.ErrorMessage showError={!value && isSubmitted}>
                You must insert this value
              </S.ErrorMessage>
            </>
          </S.RowInput>
        ))}
        <S.CalculateBtn onClick={onSubmit}>Calculate</S.CalculateBtn>
      </S.InputWrapper>
      <Table
        name={name}
        symbol={symbol}
        cashFlow={parseFloat(cashFlow)}
        debt={parseFloat(debt)}
        cash={parseFloat(cash)}
        growRate={parseFloat(growRate)}
        longGrowRate={parseFloat(longGrowRate)}
        noShares={parseFloat(noShares)}
        discountRate={parseFloat(discountRate)}
      />
    </Layout>
  );
};

export default App;
