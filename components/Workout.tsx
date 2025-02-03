import { getWorkout } from '@/hooks/db';
import { workoutQueryKey } from '@/hooks/query';
import { WorkoutType } from '@/hooks/types';
import { useQuery } from '@tanstack/react-query';
import { View, Text } from 'react-native';

export const Workout = ({ id }: { id: string }) => {
  const {
    data: workout,
    isLoading,
    isError,
    error,
  } = useQuery<WorkoutType>({
    queryKey: [workoutQueryKey],
    queryFn: () => getWorkout(Number(id)),
  });

  console.log('workout:', workout);

  return (
    <View>
      <Text>Workout: {workout?.workoutName}</Text>
      <Text>Exercises: {String(workout?.exercises)}</Text>
    </View>
  );
};
