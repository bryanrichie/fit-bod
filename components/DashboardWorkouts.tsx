import { useStyles } from '@/constants/Themes';
import { ListItem, Text, Icon } from '@rneui/themed';
import { View } from 'react-native';

export const DashboardWorkouts = () => {
  const styles = useStyles();

  const listArr = [
    {
      id: 123,
      name: 'Workout 1',
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
      <Text h4>Workouts</Text>
      <View style={styles.dashboardListContainer}>
        {listArr.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
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
