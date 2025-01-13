import { ListItem, Text, Icon, makeStyles } from '@rneui/themed';
import { View, Button, ScrollView, RefreshControl } from 'react-native';
import { getAllWorkouts, clearAllWorkouts } from '../hooks/db';
import { WorkoutsType } from '@/hooks/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { workoutsQueryKey } from '@/hooks/utils';
import { useCallback, useState } from 'react';

export const Workouts = () => {
  const [refreshing, setRefreshing] = useState(false);
  const styles = useStyles();
  const {
    data: workouts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<WorkoutsType>({
    queryKey: [workoutsQueryKey],
    queryFn: getAllWorkouts,
    refetchOnWindowFocus: true,
  });

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleClearAllWorkouts = async () => {
    await clearAllWorkouts();
    refetch();
  };

  if (isError) {
    console.error('Error fetching workouts:', error);
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
                <Icon name="arrow-forward" type="ionicon" size={15} />
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      )}
      <Button title="Refresh" onPress={() => refetch()} />
      <Button title="Clear Workouts" onPress={handleClearAllWorkouts} />
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
