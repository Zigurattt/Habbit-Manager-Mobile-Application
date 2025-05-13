import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface Props {
  onAdd: (habit: string) => void;
}

export default function AddHabitForm({ onAdd }: Props) {
  const [habit, setHabit] = useState('');
  return (
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <TextInput
        style={{ borderWidth: 1, flex: 1, padding: 8 }}
        placeholder="Enter habit"
        value={habit}
        onChangeText={setHabit}
      />
      <Button title="Add" onPress={() => { onAdd(habit); setHabit(''); }} />
    </View>
  );
}