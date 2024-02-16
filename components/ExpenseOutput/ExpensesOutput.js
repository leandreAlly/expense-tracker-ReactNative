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
  {
    id: 'e5',
    title: 'New Socks',
    amount: 9.99,
    date: new Date('2022-07-18'),
  },
  {
    id: 'e6',
    title: 'New Underwear',
    amount: 29.99,
    date: new Date('2022-07-19'),
  },
  {
    id: 'e7',
    title: 'New Jacket',
    amount: 199.99,
    date: new Date('2022-07-20'),
  },
  {
    id: 'e8',
    title: 'New Dress',
    amount: 149.99,
    date: new Date('2022-07-21'),
  },
  {
    id: 'e9',
    title: 'New Skirt',
    amount: 79.99,
    date: new Date('2022-07-22'),
  },
  {
    id: 'e10',
    title: 'New Suit',
    amount: 299.99,
    date: new Date('2022-07-23'),
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
