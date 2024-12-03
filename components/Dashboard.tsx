import { View } from 'react-native';
import { DashboardWorkouts } from './DashboardWorkouts';
import { DashboardWorkoutHistory } from './DashboardWorkoutHistory';
import { makeStyles } from '@rneui/themed';

export const Dashboard = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <DashboardWorkouts />
      <DashboardWorkoutHistory />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 10,
    gap: 10,
  },
}));
