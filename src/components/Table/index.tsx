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
  let discountValueRow = [];

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
      let firstCalculation = Math.pow(1 + discountRate, i);
      let currentDiscount = 1 / firstCalculation;

      discountFactorRow.push(
        <S.TableData>{currentDiscount.toFixed(2)}</S.TableData>
      );
    }
  };

  const calculateDiscountValue = () => {
    console.log(allYears[0].props.children);
    for (let i = 0; i < 10; i++) {
      let cf = parseFloat(cashFlowRow[i].props.children);
      let df = parseFloat(discountFactorRow[i].props.children);
      let finalValue = cf * df;
      discountValueRow.push(<S.TableData>{finalValue.toFixed(2)}</S.TableData>);
    }
  };

  calculateCashFlow();
  calculateDiscountFactor();
  calculateDiscountValue();

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
        {discountValueRow}
      </S.Row>
    </S.StyledTable>
  );
};

export default Table;
