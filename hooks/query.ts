import { queryClient } from '@/app/_layout';

export const workoutsQueryKey = 'workouts';
export const workoutQueryKey = 'workout';

export const invalidateWorkoutsQuery = async () => {
  await queryClient.invalidateQueries({
    queryKey: [workoutsQueryKey],
  });
};
