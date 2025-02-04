import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Workout } from '@/components/Workout';

export default function Page() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Workout id={id as string} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // flex: 1,
    // justifyContent: 'space-between',
  },
});
