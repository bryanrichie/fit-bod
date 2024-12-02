import { View } from 'react-native';
import { ListItem, Text, Icon } from '@rneui/themed';
import { useStyles } from '@/constants/Themes';

export const DashboardWorkoutHistory = () => {
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
    <View>
      <Text h4>History</Text>
      <View style={styles.dashboardListContainer}>
        {listArr.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.date.toDateString()}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <Icon name="arrow-forward" type="ionicon" size={15} style={styles.sidebarIcon} />
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};
