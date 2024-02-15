import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New Shoes',
    amount: 99.99,
    date: new Date('2021-07-14'),
  },
  {
    id: 'e2',
    title: 'New Shirt',
    amount: 49.99,
    date: new Date('2021-07-15'),
  },
  {
    id: 'e3',
    title: 'New Pants',
    amount: 89.99,
    date: new Date('2021-07-16'),
  },
  {
    id: 'e4',
    title: 'New Hat',
    amount: 19.99,
    date: new Date('2022-07-17'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
