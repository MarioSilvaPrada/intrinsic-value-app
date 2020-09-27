import * as React from 'react';
import * as S from './Table.styled';

const Table = ({
  name,
  symbol,
  cashFlow,
  cash,
  debt,
  growRate,
  longGrowRate,
  noShares,
  discountRate,
}) => {
  const currentYear = new Date().getFullYear();

  let allYears = [];
  let cashFlowRow = [];
  let discountFactorRow = [];

  for (let i = 1; i <= 10; i++) {
    allYears.push(<S.TableData>{currentYear + i}</S.TableData>);
  }

  const calculateCashFlow = () => {
    let currentCashFlow = cashFlow;

    for (let i = 1; i <= 10; i++) {
      let calulatedCashFlow;
      if (i < 4) {
        calulatedCashFlow = currentCashFlow * (1 + growRate);
      } else {
        calulatedCashFlow = currentCashFlow * (1 + longGrowRate);
      }
      cashFlowRow.push(
        <S.TableData>{calulatedCashFlow.toFixed(2)}</S.TableData>
      );
      currentCashFlow = calulatedCashFlow;
    }
  };

  const calculateDiscountFactor = () => {
    for (let i = 1; i <= 10; i++) {
      let firstCalculation = (1 + discountRate) ^ i;
      let currentDiscount = 1 / firstCalculation;
      console.log(firstCalculation);
      discountFactorRow.push(
        <S.TableData>{currentDiscount.toFixed(2)}</S.TableData>
      );
    }
  };

  calculateCashFlow();
  calculateDiscountFactor();

  return (
    <S.StyledTable>
      <S.Row>
        <S.TableHeader>Year</S.TableHeader>
        {allYears}
      </S.Row>
      <S.Row>
        <S.TableHeader>Cash Flow (Projected)</S.TableHeader>
        {cashFlowRow}
      </S.Row>
      <S.Row>
        <S.TableHeader>Discount factor</S.TableHeader>
        {discountFactorRow}
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
};

export default Table;
