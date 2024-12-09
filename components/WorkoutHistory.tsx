import { View } from 'react-native';
import { ListItem, Text, Icon, makeStyles } from '@rneui/themed';

export const WorkoutHistory = () => {
  const styles = useStyles();

  const listArr = [
    {
      id: 123,
      name: 'Workout 1',
      date: new Date(),
      exercises: {
        squat: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
        benchPress: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
        deadlift: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
      },
    },
    {
      id: 234,
      name: 'Workout 2',
      date: new Date(),
      exercises: {
        pullUp: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
        pushUp: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
        dip: {
          sets: 3,
          minReps: 8,
          maxReps: 10,
        },
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Text h4>History</Text>
      <View style={styles.listContainer}>
        {listArr.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.date.toDateString()}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <Icon name="arrow-forward" type="ionicon" size={15} />
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
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
