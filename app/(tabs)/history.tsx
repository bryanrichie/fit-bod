import { WorkoutHistory } from '@/components/WorkoutHistory';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <WorkoutHistory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
