import { View } from 'react-native';
import { DashboardWorkouts } from './DashboardWorkouts';
import { DashboardWorkoutHistory } from './DashboardWorkoutHistory';
import { useStyles } from '@/constants/Themes';

export const Dashboard = () => {
  const styles = useStyles();

  return (
    <View style={styles.dashboard}>
      <DashboardWorkouts />
      <DashboardWorkoutHistory />
    </View>
  );
};
