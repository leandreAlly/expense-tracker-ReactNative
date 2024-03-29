import { createContext, useReducer } from 'react';

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
  {
    id: 'e11',
    title: 'New Suit',
    amount: 299.99,
    date: new Date('2024-02-28'),
  },
  {
    id: 'e12',
    title: 'New Cap',
    amount: 299.99,
    date: new Date('2024-02-28'),
  },
  {
    id: 'e13',
    title: 'New Pat',
    amount: 299.99,
    date: new Date('2024-02-28'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      console.info('Expenses updated...!');
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
