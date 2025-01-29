import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { getWorkout } from '@/hooks/db';
import { QueryClient, QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';
import { WorkoutType } from '@/hooks/types';
import { workoutsQueryKey } from '@/hooks/query';
import { Workout } from '@/components/Workout';

export const queryClient = new QueryClient();

export default function Page() {
  const { id } = useLocalSearchParams();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Workout id={id as string} />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // flex: 1,
    // justifyContent: 'space-between',
  },
});
