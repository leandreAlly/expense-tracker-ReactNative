import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpenses({ route, navigation }) {
  const editedexpenseId = route.params?.expenseId;

  const isEditing = !!editedexpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpenses screen</Text>;
}

export default ManageExpenses;
