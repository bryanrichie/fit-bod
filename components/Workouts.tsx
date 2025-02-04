import { ListItem, Text, Icon, makeStyles } from '@rneui/themed';
import { Button, ScrollView, RefreshControl, View } from 'react-native';
import { getAllWorkouts, clearAllWorkouts } from '../hooks/db';
import { WorkoutsType } from '@/hooks/types';
import { useQuery } from '@tanstack/react-query';
import { workoutsQueryKey } from '@/hooks/query';
import { useCallback, useState } from 'react';
import { invalidateWorkoutsQuery } from '../hooks/query';
import { AddWorkoutFormOverlay } from './AddWorkoutForm';
import { Link } from 'expo-router';

export const Workouts = () => {
  const styles = useStyles();
  const {
    data: workouts,
    isLoading,
    isError,
    error,
  } = useQuery<WorkoutsType>({
    queryKey: [workoutsQueryKey],
    queryFn: getAllWorkouts,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  console.log('WORKOUTS:', workouts);

  const handleToggleOverlay = () => {
    setVisible((prev) => !prev);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    invalidateWorkoutsQuery();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleClearAllWorkouts = () => {
    clearAllWorkouts();
    invalidateWorkoutsQuery();
  };

  if (isError) {
    console.error('Error fetching workouts:', error);
    return;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text h4>Workouts</Text>
      <View
        style={{
          gap: 5,
        }}
      >
        {!workouts || workouts.length === 0 ? (
          <Text>No Workouts Found</Text>
        ) : (
          <View style={styles.listContainer}>
            {workouts.map((workout, i) => (
              <ListItem key={workout.id} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{workout.workoutName}</ListItem.Title>
                </ListItem.Content>
                <Link
                  href={{
                    pathname: '/workout/[id]',
                    params: { id: workout.id },
                  }}
                >
                  <ListItem.Content right>
                    <Icon name="arrow-forward" type="ionicon" size={15} />
                  </ListItem.Content>
                </Link>
              </ListItem>
            ))}
          </View>
        )}
        <Button title="Add Workout" onPress={handleToggleOverlay} />
      </View>
      {/* <Button title="Refresh" onPress={invalidateWorkoutsQuery} />
      <Button title="Clear Workouts" onPress={handleClearAllWorkouts} /> */}
      <AddWorkoutFormOverlay visible={visible} handleToggleOverlay={handleToggleOverlay} />
    </ScrollView>
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
