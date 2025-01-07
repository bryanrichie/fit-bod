import { ListItem, Text, Icon, makeStyles } from '@rneui/themed';
import { View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { WorkoutType } from './AddWorkoutForm';

export const Workouts = () => {
  const styles = useStyles();

  // const listArr = [
  //   {
  //     id: 123,
  //     name: 'Workout 1',
  //     exercises: {
  //       squat: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //       benchPress: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //       deadlift: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //     },
  //   },
  //   {
  //     id: 234,
  //     name: 'Workout 2',
  //     exercises: {
  //       pullUp: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //       pushUp: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //       dip: {
  //         sets: 3,
  //         minReps: 8,
  //         maxReps: 10,
  //       },
  //     },
  //   },
  // ];

  const [workouts, setWorkouts] = useState<WorkoutType[] | undefined>();

  const getAllWorkouts = async () => {
    const db = await SQLite.openDatabaseAsync('databaseName');

    const allRows: any = await db.getAllAsync('SELECT * FROM workouts ORDER BY id DESC');

    setWorkouts(allRows);

    Alert.alert('Retrieved Workouts', allRows[100].workoutName);
  };

  // const handleClearWorkouts = async () => {
  //   const db = await SQLite.openDatabaseAsync('databaseName');

  //   await db.execAsync('DELETE FROM workouts');
  // };

  useEffect(() => {
    // handleClearWorkouts();
    getAllWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text h4>Workouts</Text>
      {!workouts ? (
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
