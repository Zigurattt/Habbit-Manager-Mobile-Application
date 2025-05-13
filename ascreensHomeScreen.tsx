import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import AddHabitForm from '../components/AddHabitForm';
import HabitCard from '../components/HabitCard';
import { saveHabits, loadHabits } from '../utils/storage';

export default function HomeScreen() {
  const [habits, setHabits] = useState<string[]>([]);

  useEffect(() => {
    loadHabits().then(setHabits);
  }, []);

  const addHabit = (habit: string) => {
    const updated = [...habits, habit];
    setHabits(updated);
    saveHabits(updated);
  };

  const completeHabit = (habit: string) => {
    const updated = habits.filter(h => h !== habit);
    setHabits(updated);
    saveHabits(updated);
  };

  return (
    <View style={{ flex: 1 }}>
      <AddHabitForm onAdd={addHabit} />
      <FlatList
        data={habits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <HabitCard title={item} onComplete={() => completeHabit(item)} />
        )}
      />
    </View>
  );
}