import { View, Text } from 'react-native';
import { DashboardWorkouts } from './DashboardWorkouts';
import { DashboardWorkoutHistory } from './DashboardWorkoutHistory';

export const Dashboard = () => {
  return (
    <View style={{ backgroundColor: 'grey', width: '100%', padding: 10, gap: 50 }}>
      <DashboardWorkouts />
      <DashboardWorkoutHistory />
    </View>
  );
};
