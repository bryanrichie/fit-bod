import { getWorkout } from '@/hooks/db';
import { workoutQueryKey } from '@/hooks/query';
import { GetWorkoutType } from '@/hooks/types';
import { useQuery } from '@tanstack/react-query';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, ListItem, Text } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Workout = ({ id }: { id: string }) => {
  const {
    data: workout,
    isLoading,
    isError,
    error,
  } = useQuery<GetWorkoutType>({
    queryKey: [workoutQueryKey],
    queryFn: () => getWorkout(Number(id)),
  });

  if (isError) {
    console.error('Error fetching workout', error);
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const exercises = workout?.exercises.split(', ');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h4>{workout?.workoutName}</Text>
        <Button type="clear">
          <Ionicons name="pencil" style={styles.icon} />
        </Button>
      </View>
      <View style={styles.listContainer}>
        {exercises?.map((exercise, index) => (
          <ListItem key={index} containerStyle={styles.listItem}>
            <ListItem.Content>
              <ListItem.Title>{exercise}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content right>
              <Button type="clear">
                <Ionicons name="close" style={styles.icon} />
              </Button>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    gap: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  // divider: { marginBottom: 20 },
  // container: { flex: 1, justifyContent: 'space-between' },
  listContainer: { gap: 5 },
  listItem: { borderWidth: 1, padding: 5 },
  icon: { fontSize: 20 },
  // exerciseInput: { marginTop: 10 },
  // footerButtonContainer: { gap: 5 },
});
