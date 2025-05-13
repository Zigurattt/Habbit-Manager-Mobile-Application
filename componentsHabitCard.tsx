import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface HabitCardProps {
  title: string;
  onComplete: () => void;
}

export default function HabitCard({ title, onComplete }: HabitCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      <Button title="Done" onPress={onComplete} />
    </View>
  );
}