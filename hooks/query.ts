import { queryClient } from '@/app/(tabs)';

export const workoutsQueryKey = 'workouts';

export const invalidateWorkoutsQuery = async () => {
  await queryClient.invalidateQueries({
    queryKey: [workoutsQueryKey],
  });
};
