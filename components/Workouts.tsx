import { ListItem, Text, Icon, makeStyles } from '@rneui/themed';
import { View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllWorkouts, handleClearWorkouts } from '../hooks/db';
import { WorkoutsType } from '@/hooks/types';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export const Workouts = () => {
  // const queryClient = useQueryClient();
  const styles = useStyles();
  const {
    data: workouts,
    isLoading,
    isError,
    error,
  } = useQuery<WorkoutsType>({
    queryKey: ['workouts'],
    queryFn: getAllWorkouts,
  });
  // const [workouts, setWorkouts] = useState<WorkoutsType | undefined>();

  // useEffect(() => {
  //   handleClearWorkouts();
  // }, []);

  // queryClient.invalidateQueries({ queryKey: ['workouts'] });

  console.log('workouts:', workouts);

  if (isError) {
    console.error('Error fetching workouts:', error);
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text h4>Workouts</Text>
      {!workouts || workouts.length === 0 ? (
        <Text>No Workouts Found</Text>
      ) : (
        <View style={styles.listContainer}>
          {workouts.map((workout, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{workout.workoutName}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content right>
                <Icon
                  name="arrow-forward"
                  type="ionicon"
                  size={15} /*style={styles.sidebarIcon} */
                />
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      )}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    gap: 5,
  },
  listContainer: {
    borderWidth: 1,
  },
}));
